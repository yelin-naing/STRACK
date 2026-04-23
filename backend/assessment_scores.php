<?php
/**
 * Assessment scores for student dashboard charts and lecturer sync.
 *
 * GET  ?user_email=...                    (student) — bars: per-assessment rollup; bars_by_course: one row per
 *                                           course with avg, count, and marks[]; marks_by_course: same detail keyed by course_id
 * GET  ?user_email=...&lecturer_sync=1    (lecturer) — nested scores + optional &course_ids=1,2 for filter; also
 *                                           labels_by_course, weekly_mark_bands (last ~17 weeks by score band when saved),
 *                                           by_assessment_type (avg/min/max per assessment_id across filter; top 12).
 * POST { user_email, course_id, student_id, scores, assessment_labels?, assessment_statuses? } (lecturer) — upsert marks
 * POST { user_email, set_course_assessment_structure: true, course_id, assessments } — replace module weight structure
 * POST { user_email, delete_assessment_column: true, course_id, assessment_id } — remove that column from DB (all students)
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/getConnection.php';
require_once __DIR__ . '/demo_assignment_submissions.php';

function normalizeEmail(string $email): string
{
    $value = trim($email);
    return function_exists('mb_strtolower') ? mb_strtolower($value, 'UTF-8') : strtolower($value);
}

function readJsonBody(): array
{
    $raw = file_get_contents('php://input');
    $parsed = json_decode($raw, true);
    return is_array($parsed) ? $parsed : [];
}

function resolveUser(PDO $connection, string $email): ?array
{
    $norm = normalizeEmail($email);
    if ($norm === '') {
        return null;
    }

    $accStmt = $connection->prepare("
        SELECT id, full_name, email, role
        FROM strack_accounts
        WHERE LOWER(TRIM(email)) = :email
        LIMIT 1
    ");
    $accStmt->execute(['email' => $norm]);
    $acc = $accStmt->fetch(PDO::FETCH_ASSOC);
    if ($acc && ($acc['role'] ?? '') === 'teacher') {
        $lidStmt = $connection->prepare('SELECT lecturer_id FROM strack_lecturers WHERE account_id = :id LIMIT 1');
        $lidStmt->execute(['id' => (int) $acc['id']]);
        return [
            'role' => 'lecturer',
            'account_id' => (int) $acc['id'],
            'email' => (string) $acc['email'],
            'lecturer_id' => (string) ($lidStmt->fetchColumn() ?: ''),
        ];
    }

    $stuStmt = $connection->prepare("
        SELECT id, email
        FROM strack_students
        WHERE LOWER(TRIM(email)) = :email
        LIMIT 1
    ");
    $stuStmt->execute(['email' => $norm]);
    $stu = $stuStmt->fetch(PDO::FETCH_ASSOC);
    if ($stu) {
        return [
            'role' => 'student',
            'student_id' => (int) $stu['id'],
            'email' => (string) $stu['email'],
        ];
    }

    return null;
}

function ensureScoresTable(PDO $connection): void
{
    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_assessment_scores (
            id INT AUTO_INCREMENT PRIMARY KEY,
            student_id INT NOT NULL,
            course_id INT NOT NULL,
            assessment_id VARCHAR(128) NOT NULL,
            assessment_label VARCHAR(255) NOT NULL,
            score DECIMAL(6,2) NOT NULL,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            UNIQUE KEY uq_assessment_score (student_id, course_id, assessment_id),
            INDEX idx_assessment_student (student_id),
            INDEX idx_assessment_course (course_id),
            CONSTRAINT fk_as_student FOREIGN KEY (student_id) REFERENCES strack_students (id) ON DELETE CASCADE,
            CONSTRAINT fk_as_course FOREIGN KEY (course_id) REFERENCES strack_courses (id) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");
    try {
        $connection->exec("
            ALTER TABLE strack_assessment_scores
            ADD COLUMN mark_status VARCHAR(32) NOT NULL DEFAULT 'completed'
        ");
    } catch (PDOException $e) {
        if (stripos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }
}

function normalizeMarkStatus($raw): string
{
    $s = strtolower(trim((string) $raw));
    if ($s === 'completed') {
        return 'completed';
    }
    if ($s === 'not_marked' || $s === 'not marked') {
        return 'not_marked';
    }

    return '';
}

function ensureAssessmentWeightsTable(PDO $connection): void
{
    $connection->exec("
        CREATE TABLE IF NOT EXISTS strack_course_assessment_weights (
            course_id INT NOT NULL,
            assessment_id VARCHAR(128) NOT NULL,
            assessment_label VARCHAR(255) NOT NULL DEFAULT '',
            weight DECIMAL(7, 2) NOT NULL DEFAULT 0,
            sort_order INT NOT NULL DEFAULT 0,
            PRIMARY KEY (course_id, assessment_id),
            INDEX idx_caw_course (course_id),
            CONSTRAINT fk_caw_course FOREIGN KEY (course_id) REFERENCES strack_courses (id) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");
}

/**
 * @param int[] $courseIds
 * @return array<int, list<array{assessment_id: string, label: string, weight: float}>>
 */
function loadAssessmentWeightsForCourses(PDO $connection, array $courseIds): array
{
    $courseIds = array_values(array_unique(array_filter(array_map('intval', $courseIds))));
    if ($courseIds === []) {
        return [];
    }
    ensureAssessmentWeightsTable($connection);
    $placeholders = implode(',', array_fill(0, count($courseIds), '?'));
    $stmt = $connection->prepare("
        SELECT course_id, assessment_id, assessment_label, weight
        FROM strack_course_assessment_weights
        WHERE course_id IN ($placeholders)
        ORDER BY course_id ASC, sort_order ASC, assessment_id ASC
    ");
    $stmt->execute($courseIds);
    $out = [];
    foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $r) {
        $cid = (int) ($r['course_id'] ?? 0);
        if ($cid <= 0) {
            continue;
        }
        if (!isset($out[$cid])) {
            $out[$cid] = [];
        }
        $out[$cid][] = [
            'assessment_id' => (string) ($r['assessment_id'] ?? ''),
            'label' => (string) ($r['assessment_label'] ?? ''),
            'weight' => round((float) ($r['weight'] ?? 0), 2),
        ];
    }

    return $out;
}

/**
 * Show every assessment column the lecturer defined; fill gaps with not_marked until marks exist.
 *
 * @param list<array<string, mixed>> $marks
 * @param list<array{assessment_id: string, label: string, weight: float}> $weights
 * @return list<array<string, mixed>>
 */
function mergeStudentMarksWithAssessmentStructure(array $marks, array $weights): array
{
    if ($weights === []) {
        return $marks;
    }
    $byId = [];
    foreach ($marks as $m) {
        $aid = trim((string) ($m['assessment_id'] ?? ''));
        if ($aid !== '') {
            $byId[$aid] = $m;
        }
    }
    $out = [];
    foreach ($weights as $w) {
        $aid = trim((string) ($w['assessment_id'] ?? ''));
        if ($aid === '') {
            continue;
        }
        if (isset($byId[$aid])) {
            $out[] = $byId[$aid];
            unset($byId[$aid]);
        } else {
            $out[] = [
                'assessment_id' => $aid,
                'label' => (string) ($w['label'] ?? $aid),
                'score' => 0,
                'mark_status' => 'not_marked',
            ];
        }
    }
    foreach ($byId as $remaining) {
        $out[] = $remaining;
    }

    return $out;
}

function lecturerOwnsCourse(PDO $connection, int $courseId, array $lecturer): bool
{
    if (($lecturer['role'] ?? '') !== 'lecturer' || $courseId <= 0) {
        return false;
    }
    $stmt = $connection->prepare('SELECT lecturer_id FROM strack_courses WHERE id = :id LIMIT 1');
    $stmt->execute(['id' => $courseId]);
    $lid = trim((string) ($stmt->fetchColumn() ?: ''));
    $mine = trim((string) ($lecturer['lecturer_id'] ?? ''));
    return $lid !== '' && $mine !== '' && $lid === $mine;
}

try {
    $connection = getConnection();
    ensureScoresTable($connection);
    ensureAssessmentWeightsTable($connection);
    $method = $_SERVER['REQUEST_METHOD'];

    if ($method === 'GET') {
        $email = (string) ($_GET['user_email'] ?? '');
        $viewer = resolveUser($connection, $email);
        if (!$viewer) {
            http_response_code(401);
            echo json_encode(['success' => false, 'error' => 'Invalid user']);
            exit;
        }

        if (isset($_GET['lecturer_sync'])) {
            if (($viewer['role'] ?? '') !== 'lecturer') {
                http_response_code(403);
                echo json_encode(['success' => false, 'error' => 'Lecturer login required']);
                exit;
            }
            $lid = trim((string) ($viewer['lecturer_id'] ?? ''));
            if ($lid === '') {
                echo json_encode([
                    'success' => true,
                    'nested' => [],
                    'labels_by_course' => new \stdClass(),
                    'weekly_mark_bands' => [],
                    'weekly_demo_uploads' => [],
                    'by_assessment_type' => [],
                ]);
                exit;
            }

            $courseFilterIds = [];
            $rawIds = (string) ($_GET['course_ids'] ?? '');
            if ($rawIds !== '') {
                foreach (explode(',', $rawIds) as $part) {
                    $n = (int) trim($part);
                    if ($n > 0) {
                        $courseFilterIds[$n] = true;
                    }
                }
            }
            $courseFilterIds = array_keys($courseFilterIds);

            $whereCourses = '';
            $params = ['lid' => $lid];
            if ($courseFilterIds !== []) {
                $inParts = [];
                foreach ($courseFilterIds as $i => $cid) {
                    $k = 'cid' . $i;
                    $inParts[] = ':' . $k;
                    $params[$k] = (int) $cid;
                }
                $whereCourses = ' AND s.course_id IN (' . implode(',', $inParts) . ') ';
            }

            $stmt = $connection->prepare("
                SELECT
                    s.course_id,
                    s.student_id,
                    s.assessment_id,
                    s.score,
                    COALESCE(NULLIF(TRIM(s.mark_status), ''), 'completed') AS mark_status
                FROM strack_assessment_scores s
                INNER JOIN strack_courses c ON c.id = s.course_id
                WHERE TRIM(c.lecturer_id) = TRIM(:lid)
                $whereCourses
            ");
            $stmt->execute($params);
            $nested = [];
            $nestedStatus = [];
            foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $r) {
                $cid = (string) ((int) ($r['course_id'] ?? 0));
                $sid = (string) ((int) ($r['student_id'] ?? 0));
                if ($cid === '0' || $sid === '0') {
                    continue;
                }
                if (!isset($nested[$cid])) {
                    $nested[$cid] = [];
                }
                if (!isset($nested[$cid][$sid])) {
                    $nested[$cid][$sid] = [];
                }
                $aid = (string) ($r['assessment_id'] ?? '');
                $nested[$cid][$sid][$aid] = round((float) ($r['score'] ?? 0), 2);
                $ms = normalizeMarkStatus($r['mark_status'] ?? 'completed');
                if ($ms === '') {
                    $ms = 'completed';
                }
                if (!isset($nestedStatus[$cid])) {
                    $nestedStatus[$cid] = [];
                }
                if (!isset($nestedStatus[$cid][$sid])) {
                    $nestedStatus[$cid][$sid] = [];
                }
                $nestedStatus[$cid][$sid][$aid] = $ms;
            }

            $labelStmt = $connection->prepare("
                SELECT
                    s.course_id,
                    s.assessment_id,
                    COALESCE(
                        MAX(CASE
                            WHEN TRIM(COALESCE(s.assessment_label, '')) <> ''
                             AND TRIM(s.assessment_label) <> TRIM(s.assessment_id)
                            THEN TRIM(s.assessment_label)
                            ELSE NULL
                        END),
                        NULLIF(TRIM(MAX(COALESCE(s.assessment_label, ''))), '')
                    ) AS assessment_label
                FROM strack_assessment_scores s
                INNER JOIN strack_courses c ON c.id = s.course_id
                WHERE TRIM(c.lecturer_id) = TRIM(:lid)
                $whereCourses
                GROUP BY s.course_id, s.assessment_id
            ");
            $labelStmt->execute($params);
            $labelsByCourse = [];
            foreach ($labelStmt->fetchAll(PDO::FETCH_ASSOC) as $r) {
                $cid = (string) ((int) ($r['course_id'] ?? 0));
                if ($cid === '0') {
                    continue;
                }
                if (!isset($labelsByCourse[$cid])) {
                    $labelsByCourse[$cid] = [];
                }
                $aid = (string) ($r['assessment_id'] ?? '');
                if ($aid === '') {
                    continue;
                }
                $lbl = trim((string) ($r['assessment_label'] ?? ''));
                $labelsByCourse[$cid][$aid] = $lbl !== '' ? $lbl : $aid;
            }

            $weekStmt = $connection->prepare("
                SELECT
                    DATE_FORMAT(s.updated_at, '%x-W%v') AS yw_key,
                    SUM(CASE WHEN s.score >= 70 THEN 1 ELSE 0 END) AS on_time_cnt,
                    SUM(CASE WHEN s.score >= 40 AND s.score < 70 THEN 1 ELSE 0 END) AS late_cnt,
                    SUM(CASE WHEN s.score < 40 THEN 1 ELSE 0 END) AS missing_cnt
                FROM strack_assessment_scores s
                INNER JOIN strack_courses c ON c.id = s.course_id
                WHERE TRIM(c.lecturer_id) = TRIM(:lid)
                $whereCourses
                  AND s.updated_at >= DATE_SUB(CURDATE(), INTERVAL 120 DAY)
                GROUP BY yw_key
                ORDER BY yw_key ASC
            ");
            $weekStmt->execute($params);
            $weeklyMarkBands = [];
            foreach ($weekStmt->fetchAll(PDO::FETCH_ASSOC) as $r) {
                $weeklyMarkBands[] = [
                    'yw_key' => (string) ($r['yw_key'] ?? ''),
                    'on_time' => (int) ($r['on_time_cnt'] ?? 0),
                    'late' => (int) ($r['late_cnt'] ?? 0),
                    'missing' => (int) ($r['missing_cnt'] ?? 0),
                ];
            }

            $typeStmt = $connection->prepare("
                SELECT
                    s.assessment_id,
                    MAX(s.assessment_label) AS assessment_label,
                    AVG(s.score) AS avg_score,
                    MAX(s.score) AS max_score,
                    MIN(s.score) AS min_score,
                    COUNT(*) AS mark_count
                FROM strack_assessment_scores s
                INNER JOIN strack_courses c ON c.id = s.course_id
                WHERE TRIM(c.lecturer_id) = TRIM(:lid)
                $whereCourses
                GROUP BY s.assessment_id
                ORDER BY mark_count DESC, assessment_label ASC
                LIMIT 12
            ");
            $typeStmt->execute($params);
            $byAssessmentType = [];
            foreach ($typeStmt->fetchAll(PDO::FETCH_ASSOC) as $r) {
                $byAssessmentType[] = [
                    'assessment_id' => (string) ($r['assessment_id'] ?? ''),
                    'label' => (string) ($r['assessment_label'] ?? $r['assessment_id'] ?? ''),
                    'avg_score' => round((float) ($r['avg_score'] ?? 0), 1),
                    'max_score' => round((float) ($r['max_score'] ?? 0), 1),
                    'min_score' => round((float) ($r['min_score'] ?? 0), 1),
                    'mark_count' => (int) ($r['mark_count'] ?? 0),
                ];
            }

            $weeklyDemoUploads = weeklyDemoUploadCountsForLecturer($connection, $lid, $courseFilterIds);

            $lecCourseIds = [];
            foreach (array_keys($nested) as $k) {
                $cid = (int) $k;
                if ($cid > 0) {
                    $lecCourseIds[] = $cid;
                }
            }
            $weightsByCourseLecturer = loadAssessmentWeightsForCourses($connection, $lecCourseIds);
            $weightsJson = [];
            foreach ($weightsByCourseLecturer as $cid => $rows) {
                $weightsJson[(string) $cid] = $rows;
            }

            echo json_encode([
                'success' => true,
                'nested' => $nested,
                'nested_status' => $nestedStatus,
                'labels_by_course' => $labelsByCourse === [] ? new \stdClass() : $labelsByCourse,
                'weights_by_course' => $weightsJson === [] ? new \stdClass() : $weightsJson,
                'weekly_mark_bands' => $weeklyMarkBands,
                'weekly_demo_uploads' => $weeklyDemoUploads,
                'by_assessment_type' => $byAssessmentType,
            ]);
            exit;
        }

        if (($viewer['role'] ?? '') !== 'student') {
            http_response_code(401);
            echo json_encode(['success' => false, 'error' => 'Student login required']);
            exit;
        }
        $studentId = (int) ($viewer['student_id'] ?? 0);
        $stmt = $connection->prepare("
            SELECT
                assessment_id,
                MAX(assessment_label) AS assessment_label,
                AVG(score) AS avg_score,
                COUNT(*) AS course_count
            FROM strack_assessment_scores
            WHERE student_id = :student_id
            GROUP BY assessment_id
            ORDER BY assessment_label ASC
        ");
        $stmt->execute(['student_id' => $studentId]);
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $bars = [];
        foreach ($rows as $row) {
            $bars[] = [
                'assessment_id' => (string) ($row['assessment_id'] ?? ''),
                'label' => (string) ($row['assessment_label'] ?? $row['assessment_id'] ?? ''),
                'avg_score' => round((float) ($row['avg_score'] ?? 0), 1),
                'course_count' => (int) ($row['course_count'] ?? 0),
            ];
        }

        $courseStmt = $connection->prepare("
            SELECT
                s.course_id,
                c.course_code,
                c.course_name,
                AVG(s.score) AS avg_score,
                COUNT(*) AS assessment_count
            FROM strack_assessment_scores s
            INNER JOIN strack_courses c ON c.id = s.course_id
            WHERE s.student_id = :student_id
            GROUP BY s.course_id, c.course_code, c.course_name
            ORDER BY c.course_code ASC
        ");
        $courseStmt->execute(['student_id' => $studentId]);
        $barsByCourse = [];
        foreach ($courseStmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
            $barsByCourse[] = [
                'course_id' => (int) ($row['course_id'] ?? 0),
                'course_code' => (string) ($row['course_code'] ?? ''),
                'course_name' => (string) ($row['course_name'] ?? ''),
                'avg_score' => round((float) ($row['avg_score'] ?? 0), 1),
                'assessment_count' => (int) ($row['assessment_count'] ?? 0),
            ];
        }

        $marksStmt = $connection->prepare("
            SELECT
                course_id,
                assessment_id,
                assessment_label,
                score,
                COALESCE(NULLIF(TRIM(mark_status), ''), 'completed') AS mark_status
            FROM strack_assessment_scores
            WHERE student_id = :student_id
            ORDER BY course_id ASC, assessment_label ASC, assessment_id ASC
        ");
        $marksStmt->execute(['student_id' => $studentId]);
        $marksByCourse = [];
        foreach ($marksStmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
            $cid = (int) ($row['course_id'] ?? 0);
            if ($cid <= 0) {
                continue;
            }
            if (!isset($marksByCourse[$cid])) {
                $marksByCourse[$cid] = [];
            }
            $ms = normalizeMarkStatus($row['mark_status'] ?? 'completed');
            if ($ms === '') {
                $ms = 'completed';
            }
            $marksByCourse[$cid][] = [
                'assessment_id' => (string) ($row['assessment_id'] ?? ''),
                'label' => (string) ($row['assessment_label'] ?? $row['assessment_id'] ?? ''),
                'score' => round((float) ($row['score'] ?? 0), 1),
                'mark_status' => $ms,
            ];
        }

        $haveCourseIds = [];
        foreach ($barsByCourse as $b) {
            $cid = (int) ($b['course_id'] ?? 0);
            if ($cid > 0) {
                $haveCourseIds[$cid] = true;
            }
        }
        try {
            $extraStmt = $connection->prepare("
                SELECT DISTINCT c.id AS course_id, c.course_code, c.course_name
                FROM strack_course_students cs
                INNER JOIN strack_courses c ON c.id = cs.course_id
                INNER JOIN strack_course_assessment_weights aw ON aw.course_id = c.id
                WHERE cs.student_id = :sid
            ");
            $extraStmt->execute(['sid' => $studentId]);
            foreach ($extraStmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
                $cid = (int) ($row['course_id'] ?? 0);
                if ($cid <= 0 || isset($haveCourseIds[$cid])) {
                    continue;
                }
                $haveCourseIds[$cid] = true;
                $barsByCourse[] = [
                    'course_id' => $cid,
                    'course_code' => (string) ($row['course_code'] ?? ''),
                    'course_name' => (string) ($row['course_name'] ?? ''),
                    'avg_score' => 0,
                    'assessment_count' => 0,
                ];
                if (!isset($marksByCourse[$cid])) {
                    $marksByCourse[$cid] = [];
                }
            }
        } catch (PDOException $e) {
            // strack_course_students may be missing on minimal installs
        }

        $courseIdsForWeights = array_map(static function ($row) {
            return (int) ($row['course_id'] ?? 0);
        }, $barsByCourse);
        $weightsByCourse = loadAssessmentWeightsForCourses($connection, $courseIdsForWeights);
        foreach ($barsByCourse as $i => $bar) {
            $cid = (int) ($bar['course_id'] ?? 0);
            $weights = ($cid > 0 && isset($weightsByCourse[$cid]))
                ? $weightsByCourse[$cid]
                : [];
            $barsByCourse[$i]['assessment_weights'] = $weights;
            $rawMarks = ($cid > 0 && isset($marksByCourse[$cid])) ? $marksByCourse[$cid] : [];
            $barsByCourse[$i]['marks'] = mergeStudentMarksWithAssessmentStructure($rawMarks, $weights);
        }

        usort($barsByCourse, static function ($a, $b) {
            return strcmp(
                (string) ($a['course_code'] ?? ''),
                (string) ($b['course_code'] ?? '')
            );
        });

        $marksByCourseMerged = [];
        foreach ($barsByCourse as $bar) {
            $cid = (int) ($bar['course_id'] ?? 0);
            if ($cid > 0) {
                $marksByCourseMerged[$cid] = $bar['marks'];
            }
        }

        echo json_encode([
            'success' => true,
            'bars' => $bars,
            'bars_by_course' => $barsByCourse,
            // Always JSON object (never []) so clients can key by course_id safely
            'marks_by_course' => $marksByCourseMerged === [] ? new \stdClass() : $marksByCourseMerged,
        ]);
        exit;
    }

    if ($method === 'POST') {
        $input = readJsonBody();
        $email = (string) ($input['user_email'] ?? '');
        $viewer = resolveUser($connection, $email);
        if (!$viewer || ($viewer['role'] ?? '') !== 'lecturer') {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'Lecturer login required']);
            exit;
        }

        if (!empty($input['set_course_assessment_structure'])) {
            $structureCourseId = (int) ($input['course_id'] ?? 0);
            $assessments = $input['assessments'] ?? [];
            if ($structureCourseId <= 0 || !is_array($assessments)) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'course_id and assessments array are required']);
                exit;
            }
            if (!lecturerOwnsCourse($connection, $structureCourseId, $viewer)) {
                http_response_code(403);
                echo json_encode(['success' => false, 'error' => 'You do not own this course']);
                exit;
            }
            ensureAssessmentWeightsTable($connection);
            $del = $connection->prepare('DELETE FROM strack_course_assessment_weights WHERE course_id = :cid');
            $del->execute(['cid' => $structureCourseId]);
            $ins = $connection->prepare('
                INSERT INTO strack_course_assessment_weights
                    (course_id, assessment_id, assessment_label, weight, sort_order)
                VALUES
                    (:course_id, :assessment_id, :assessment_label, :weight, :sort_order)
            ');
            $order = 0;
            foreach ($assessments as $a) {
                if (!is_array($a)) {
                    continue;
                }
                $aid = trim((string) ($a['id'] ?? $a['assessment_id'] ?? ''));
                if ($aid === '') {
                    continue;
                }
                $aLabel = trim((string) ($a['name'] ?? $a['label'] ?? $a['assessment_label'] ?? ''));
                $w = isset($a['weight']) && is_numeric($a['weight']) ? (float) $a['weight'] : 0;
                if ($w < 0) {
                    $w = 0;
                }
                if ($w > 1000) {
                    $w = 1000;
                }
                $order++;
                $ins->execute([
                    'course_id' => $structureCourseId,
                    'assessment_id' => $aid,
                    'assessment_label' => $aLabel !== '' ? $aLabel : $aid,
                    'weight' => $w,
                    'sort_order' => $order,
                ]);
            }
            echo json_encode(['success' => true]);
            exit;
        }

        if (!empty($input['delete_assessment_column'])) {
            $delCourseId = (int) ($input['course_id'] ?? 0);
            $delAid = trim((string) ($input['assessment_id'] ?? ''));
            if ($delCourseId <= 0 || $delAid === '') {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'course_id and assessment_id are required']);
                exit;
            }
            if (!lecturerOwnsCourse($connection, $delCourseId, $viewer)) {
                http_response_code(403);
                echo json_encode(['success' => false, 'error' => 'You do not own this course']);
                exit;
            }
            ensureScoresTable($connection);
            ensureAssessmentWeightsTable($connection);
            $delScores = $connection->prepare('
                DELETE FROM strack_assessment_scores
                WHERE course_id = :cid AND assessment_id = :aid
            ');
            $delScores->execute(['cid' => $delCourseId, 'aid' => $delAid]);
            $deletedScores = $delScores->rowCount();
            $delWeights = $connection->prepare('
                DELETE FROM strack_course_assessment_weights
                WHERE course_id = :cid AND assessment_id = :aid
            ');
            $delWeights->execute(['cid' => $delCourseId, 'aid' => $delAid]);
            echo json_encode([
                'success' => true,
                'deleted_score_rows' => $deletedScores,
                'deleted_weight_row' => $delWeights->rowCount(),
            ]);
            exit;
        }

        $courseId = (int) ($input['course_id'] ?? 0);
        $studentId = (int) ($input['student_id'] ?? 0);
        $scores = $input['scores'] ?? [];
        $labels = $input['assessment_labels'] ?? [];
        $statuses = $input['assessment_statuses'] ?? [];

        if (!$courseId || !$studentId || !is_array($scores)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'course_id, student_id, and scores are required']);
            exit;
        }

        if (!lecturerOwnsCourse($connection, $courseId, $viewer)) {
            http_response_code(403);
            echo json_encode(['success' => false, 'error' => 'You do not own this course']);
            exit;
        }

        $upsert = $connection->prepare("
            INSERT INTO strack_assessment_scores
                (student_id, course_id, assessment_id, assessment_label, score, mark_status)
            VALUES
                (:student_id, :course_id, :assessment_id, :assessment_label, :score, :mark_status)
            ON DUPLICATE KEY UPDATE
                assessment_label = VALUES(assessment_label),
                score = VALUES(score),
                mark_status = VALUES(mark_status)
        ");

        foreach ($scores as $assessmentId => $rawScore) {
            $aid = trim((string) $assessmentId);
            if ($aid === '') {
                continue;
            }
            $score = is_numeric($rawScore) ? (float) $rawScore : 0;
            if ($score < 0) {
                $score = 0;
            }
            if ($score > 100) {
                $score = 100;
            }
            $label = '';
            if (is_array($labels)) {
                if (isset($labels[$assessmentId])) {
                    $label = trim((string) $labels[$assessmentId]);
                } elseif (isset($labels[$aid])) {
                    $label = trim((string) $labels[$aid]);
                }
            }
            if ($label === '') {
                $label = $aid;
            }
            $markStatus = '';
            if (is_array($statuses)) {
                if (isset($statuses[$assessmentId])) {
                    $markStatus = normalizeMarkStatus($statuses[$assessmentId]);
                } elseif (isset($statuses[$aid])) {
                    $markStatus = normalizeMarkStatus($statuses[$aid]);
                }
            }
            if ($markStatus === '') {
                $markStatus = 'completed';
            }
            $upsert->execute([
                'student_id' => $studentId,
                'course_id' => $courseId,
                'assessment_id' => $aid,
                'assessment_label' => $label,
                'score' => $score,
                'mark_status' => $markStatus,
            ]);
        }

        echo json_encode(['success' => true]);
        exit;
    }

    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
