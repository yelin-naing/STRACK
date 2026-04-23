<?php
/**
 * Admin dashboard aggregates — reads strack_* tables (students, departments, scores, attendance, etc.).
 * GET: JSON for admin portal overview.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/getConnection.php';

/** Only these literal names are ever interpolated — avoids injection. */
const ADMIN_ANALYTICS_TABLES = ['strack_lecturers', 'strack_courses', 'strack_departments', 'strack_assessment_scores', 'strack_attendance_marks', 'strack_timetable_entries'];

function adminAnalyticsTableNameOk(string $table): bool
{
    return in_array($table, ADMIN_ANALYTICS_TABLES, true);
}

/**
 * Reliable row count — does not use SHOW TABLES (PDO bound params often break SHOW TABLES on shared hosts).
 */
function countRowsInTable(PDO $connection, string $table): int
{
    if (!adminAnalyticsTableNameOk($table)) {
        return 0;
    }
    try {
        return (int) $connection->query('SELECT COUNT(*) FROM `' . $table . '`')->fetchColumn();
    } catch (PDOException $e) {
        return 0;
    }
}

/**
 * True if the physical table exists (including when empty). SELECT 1 works on empty tables.
 */
function physicalTableExists(PDO $connection, string $table): bool
{
    if (!adminAnalyticsTableNameOk($table)) {
        return false;
    }
    try {
        $connection->query('SELECT 1 FROM `' . $table . '` LIMIT 1');

        return true;
    } catch (PDOException $e) {
        return false;
    }
}

/**
 * Map free-text student.department onto a single strack_departments.name where possible.
 * Merges e.g. "Computer Science" with "School of Computer Science" (substring match → longest official name wins).
 *
 * @param array<int, array{name?: string, code?: string}> $departments
 */
function resolveCanonicalDepartmentName(string $rawDepartment, array $departments): string
{
    $s = trim($rawDepartment);
    if ($s === '') {
        return 'Unassigned';
    }
    $lower = static function ($t): string {
        return function_exists('mb_strtolower') ? mb_strtolower($t, 'UTF-8') : strtolower($t);
    };

    $ls = $lower($s);

    foreach ($departments as $d) {
        $name = trim((string) ($d['name'] ?? ''));
        $code = trim((string) ($d['code'] ?? ''));
        if ($name !== '' && $ls === $lower($name)) {
            return $name;
        }
        if ($code !== '' && $ls === $lower($code)) {
            return $name !== '' ? $name : $s;
        }
    }

    $lenS = function_exists('mb_strlen') ? mb_strlen($ls, 'UTF-8') : strlen($ls);
    if ($lenS < 3) {
        return $s;
    }

    $hits = [];
    foreach ($departments as $d) {
        $name = trim((string) ($d['name'] ?? ''));
        if ($name === '') {
            continue;
        }
        $ln = $lower($name);
        if (strpos($ln, $ls) !== false || strpos($ls, $ln) !== false) {
            $hits[] = $name;
        }
    }
    if (count($hits) > 0) {
        usort($hits, static function ($a, $b) {
            $la = function_exists('mb_strlen') ? mb_strlen($a, 'UTF-8') : strlen($a);
            $lb = function_exists('mb_strlen') ? mb_strlen($b, 'UTF-8') : strlen($b);

            return $lb <=> $la;
        });

        return $hits[0];
    }

    return $s;
}

/**
 * Short label for pie (department code); falls back to initials when code empty.
 *
 * @param array<int, array{name?: string, code?: string}> $departmentReference
 *
 * @return array{code: string, fullName: string}
 */
function departmentPieSlice(string $canonicalName, array $departmentReference): array
{
    if ($canonicalName === 'Unassigned') {
        return ['code' => 'N/A', 'fullName' => 'Unassigned'];
    }

    $lower = static function ($t): string {
        return function_exists('mb_strtolower') ? mb_strtolower($t, 'UTF-8') : strtolower($t);
    };
    $lc = $lower($canonicalName);

    foreach ($departmentReference as $d) {
        $n = trim((string) ($d['name'] ?? ''));
        if ($n === '' || $lower($n) !== $lc) {
            continue;
        }
        $code = trim((string) ($d['code'] ?? ''));
        if ($code !== '') {
            return ['code' => $code, 'fullName' => $n];
        }
        $fallback = deptCodeFromInitials($n);

        return ['code' => $fallback, 'fullName' => $n];
    }

    return [
        'code' => deptCodeFromInitials($canonicalName),
        'fullName' => $canonicalName,
    ];
}

function deptCodeFromInitials(string $label): string
{
    $t = trim($label);
    if ($t === '') {
        return '?';
    }
    $parts = preg_split('/\s+/u', $t, -1, PREG_SPLIT_NO_EMPTY);
    $ac = '';
    foreach ($parts as $p) {
        $ac .= function_exists('mb_strtoupper')
            ? mb_strtoupper(mb_substr($p, 0, 1, 'UTF-8'), 'UTF-8')
            : strtoupper(substr($p, 0, 1));
    }
    if ($ac === '') {
        return '?';
    }
    if (function_exists('mb_strlen') && mb_strlen($ac, 'UTF-8') > 12) {
        return mb_substr($ac, 0, 12, 'UTF-8');
    }

    return strlen($ac) > 12 ? substr($ac, 0, 12) : $ac;
}

/**
 * @param float[] $values 0–100 scale recommended for assessment marks
 * @return array<int, array{name: string, count: int}>
 */
function bucketPercentScores(array $values): array
{
    $valid = array_filter($values, static fn ($v) => is_numeric($v) && (float) $v >= 0);
    if (empty($valid)) {
        return [['name' => 'No data', 'count' => 0]];
    }
    $buckets = [
        '0–40' => 0,
        '40–50' => 0,
        '50–60' => 0,
        '60–70' => 0,
        '70–80' => 0,
        '80–100' => 0,
    ];
    foreach ($valid as $g) {
        $x = (float) $g;
        if ($x < 40) {
            ++$buckets['0–40'];
        } elseif ($x < 50) {
            ++$buckets['40–50'];
        } elseif ($x < 60) {
            ++$buckets['50–60'];
        } elseif ($x < 70) {
            ++$buckets['60–70'];
        } elseif ($x < 80) {
            ++$buckets['70–80'];
        } else {
            ++$buckets['80–100'];
        }
    }
    $out = [];
    foreach ($buckets as $name => $count) {
        $out[] = ['name' => $name, 'count' => $count];
    }

    return $out;
}

/**
 * @param float[] $gpas student profile gpa column (mixed scales)
 * @return array<int, array{name: string, count: int}>
 */
function bucketProfileGpas(array $gpas): array
{
    $valid = array_filter($gpas, static fn ($v) => is_numeric($v) && (float) $v > 0);
    if (empty($valid)) {
        return [['name' => 'No data', 'count' => 0]];
    }
    $max = max(array_map(static fn ($v) => (float) $v, $valid));
    $buckets = [];
    if ($max <= 4.5) {
        foreach (['0–1', '1–2', '2–3', '3–4', '4+'] as $k) {
            $buckets[$k] = 0;
        }
        foreach ($valid as $g) {
            $x = (float) $g;
            if ($x < 1) {
                ++$buckets['0–1'];
            } elseif ($x < 2) {
                ++$buckets['1–2'];
            } elseif ($x < 3) {
                ++$buckets['2–3'];
            } elseif ($x < 4) {
                ++$buckets['3–4'];
            } else {
                ++$buckets['4+'];
            }
        }
    } else {
        return bucketPercentScores($valid);
    }
    $out = [];
    foreach ($buckets as $name => $count) {
        $out[] = ['name' => $name, 'count' => $count];
    }

    return $out;
}

try {
    $connection = getConnection();

    $enrollmentIntakeYearFilter = '';
    if (isset($_GET['enrollment_intake_year'])) {
        $rawY = trim((string) $_GET['enrollment_intake_year']);
        if ($rawY !== '' && ctype_digit($rawY)) {
            $y = (int) $rawY;
            if ($y >= 2000 && $y <= 2100) {
                $enrollmentIntakeYearFilter = (string) $y;
            }
        }
    }

    $totalStudents = (int) $connection->query('SELECT COUNT(*) FROM strack_students')->fetchColumn();
    $totalLecturers = countRowsInTable($connection, 'strack_lecturers');
    $totalCourses = countRowsInTable($connection, 'strack_courses');
    $totalDepartments = countRowsInTable($connection, 'strack_departments');

    $gpaRows = $connection->query('SELECT COALESCE(gpa, 0) AS gpa FROM strack_students')->fetchAll(PDO::FETCH_ASSOC);
    $gpaVals = array_map(static fn ($r) => (float) ($r['gpa'] ?? 0), $gpaRows);
    $nonZeroProfile = array_filter($gpaVals, static fn ($g) => $g > 0);
    $averageGpaProfile = count($nonZeroProfile) > 0
        ? round(array_sum($nonZeroProfile) / count($nonZeroProfile), 2)
        : null;

    /** Mean of all rows in strack_assessment_scores — live marks */
    $averageAssessmentPct = null;
    $scoreValues = [];
    if (physicalTableExists($connection, 'strack_assessment_scores')) {
        try {
            $sc = $connection->query('SELECT AVG(score) AS a, COUNT(*) AS c FROM strack_assessment_scores')->fetch(PDO::FETCH_ASSOC);
            if ($sc && (int) ($sc['c'] ?? 0) > 0 && $sc['a'] !== null) {
                $averageAssessmentPct = round((float) $sc['a'], 2);
            }
            $sv = $connection->query('SELECT score FROM strack_assessment_scores');
            if ($sv) {
                foreach ($sv->fetchAll(PDO::FETCH_ASSOC) as $row) {
                    $scoreValues[] = (float) ($row['score'] ?? 0);
                }
            }
        } catch (PDOException $e) {
            $averageAssessmentPct = null;
            $scoreValues = [];
        }
    }

    /** Single headline number: prefer institution mean mark % when assessment data exists */
    $headlineAverage = $averageAssessmentPct !== null ? $averageAssessmentPct : $averageGpaProfile;
    $headlineKind = $averageAssessmentPct !== null ? 'assessment_pct' : ($averageGpaProfile !== null ? 'profile_gpa' : null);

    /** Students by department — canonical names from strack_departments; shorthand text merged in PHP */
    $studentsByDepartment = [];
    $departmentReference = [];
    if (physicalTableExists($connection, 'strack_departments')) {
        try {
            $dr = $connection->query('SELECT TRIM(COALESCE(name, \'\')) AS name, TRIM(COALESCE(code, \'\')) AS code FROM strack_departments');
            if ($dr) {
                foreach ($dr->fetchAll(PDO::FETCH_ASSOC) as $row) {
                    $departmentReference[] = [
                        'name' => (string) ($row['name'] ?? ''),
                        'code' => (string) ($row['code'] ?? ''),
                    ];
                }
            }
        } catch (PDOException $e) {
            $departmentReference = [];
        }
    }

    $deptCounts = [];
    $stuRows = $connection->query('SELECT department FROM strack_students');
    if ($stuRows) {
        foreach ($stuRows->fetchAll(PDO::FETCH_ASSOC) as $row) {
            $raw = (string) ($row['department'] ?? '');
            if (count($departmentReference) > 0) {
                $label = resolveCanonicalDepartmentName($raw, $departmentReference);
            } else {
                $t = trim($raw);
                $label = $t === '' ? 'Unassigned' : $t;
            }
            if (!isset($deptCounts[$label])) {
                $deptCounts[$label] = 0;
            }
            ++$deptCounts[$label];
        }
    }
    arsort($deptCounts, SORT_NUMERIC);
    foreach ($deptCounts as $canonicalName => $cnt) {
        $slice = count($departmentReference) > 0
            ? departmentPieSlice($canonicalName, $departmentReference)
            : [
                'code' => $canonicalName === 'Unassigned' ? 'N/A' : deptCodeFromInitials($canonicalName),
                'fullName' => $canonicalName,
            ];
        $studentsByDepartment[] = [
            'name' => $slice['code'],
            'fullName' => $slice['fullName'],
            'value' => (int) $cnt,
        ];
    }

    /** Marks distribution: real assessment scores first, else profile GPA */
    if (count($scoreValues) > 0) {
        $gpaDistribution = bucketPercentScores($scoreValues);
    } else {
        $gpaDistribution = bucketProfileGpas($gpaVals);
    }
    $marksDistributionTotal = 0;
    foreach ($gpaDistribution as $row) {
        $marksDistributionTotal += (int) ($row['count'] ?? 0);
    }

    $gpaMonthlyTrend = [];
    if (physicalTableExists($connection, 'strack_assessment_scores')) {
        $trendStmt = $connection->query("
            SELECT
                DATE_FORMAT(updated_at, '%Y-%m') AS ym,
                AVG(score) AS avg_score,
                COUNT(*) AS n
            FROM strack_assessment_scores
            GROUP BY ym
            ORDER BY ym ASC
            LIMIT 36
        ");
        if ($trendStmt) {
            foreach ($trendStmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
                $gpaMonthlyTrend[] = [
                    'month' => (string) ($row['ym'] ?? ''),
                    'avgAssessmentPct' => $row['avg_score'] !== null
                        ? round((float) $row['avg_score'], 1)
                        : 0,
                    'marks' => (int) ($row['n'] ?? 0),
                ];
            }
        }
    }

    $attendanceTrend = [];
    if (physicalTableExists($connection, 'strack_attendance_marks') && physicalTableExists($connection, 'strack_timetable_entries')) {
        $attStmt = $connection->query("
            SELECT
                DATE_FORMAT(e.entry_date, '%Y-%m') AS ym,
                COALESCE(SUM(CASE WHEN am.status = 'present' THEN 1 ELSE 0 END), 0) AS present,
                COALESCE(SUM(CASE WHEN am.status = 'absent' THEN 1 ELSE 0 END), 0) AS absent,
                COUNT(*) AS total
            FROM strack_attendance_marks am
            INNER JOIN strack_timetable_entries e
                ON e.id = am.class_id AND e.entry_type = 'class'
            GROUP BY ym
            ORDER BY ym ASC
            LIMIT 36
        ");
        if ($attStmt) {
            foreach ($attStmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
                $t = (int) ($row['total'] ?? 0);
                $p = (int) ($row['present'] ?? 0);
                $a = (int) ($row['absent'] ?? 0);
                $attendanceTrend[] = [
                    'month' => (string) ($row['ym'] ?? ''),
                    'presentRate' => $t > 0 ? (int) round(($p / $t) * 100) : 0,
                    'absentRate' => $t > 0 ? (int) round(($a / $t) * 100) : 0,
                    'sessions' => $t,
                ];
            }
        }
    }

    /** Enrollment by intake month (Sep / Jan / May), optional intake year filter — only affects this series */
    $enrollmentByIntake = [];
    $enrollmentIntakeYears = [];
    $enrollmentIntakeTotal = 0;

    try {
        $connection->query('SELECT intake_month, intake_year FROM strack_students LIMIT 1');
    } catch (PDOException $e) {
        // Older DB without intake columns
    }

    try {
        $yrStmt = $connection->query("
            SELECT DISTINCT intake_year AS y
            FROM strack_students
            WHERE intake_year IS NOT NULL AND intake_year >= 2000 AND intake_year <= 2100
            ORDER BY intake_year DESC
        ");
        if ($yrStmt) {
            foreach ($yrStmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
                $enrollmentIntakeYears[] = (int) ($row['y'] ?? 0);
            }
        }
    } catch (PDOException $e) {
        $enrollmentIntakeYears = [];
    }

    $intakeMonthLabels = [
        'Sep' => 'September intake',
        'Jan' => 'January intake',
        'May' => 'May intake',
    ];
    $counts = ['Sep' => 0, 'Jan' => 0, 'May' => 0];

    try {
        $sql = "
            SELECT TRIM(intake_month) AS im, COUNT(*) AS cnt
            FROM strack_students
            WHERE TRIM(intake_month) IN ('Sep', 'Jan', 'May')
        ";
        $params = [];
        if ($enrollmentIntakeYearFilter !== '') {
            $sql .= ' AND intake_year = :enr_iy';
            $params['enr_iy'] = (int) $enrollmentIntakeYearFilter;
        }
        $sql .= ' GROUP BY TRIM(intake_month)';
        $stmt = $connection->prepare($sql);
        $stmt->execute($params);
        foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
            $im = (string) ($row['im'] ?? '');
            if (isset($counts[$im])) {
                $counts[$im] = (int) ($row['cnt'] ?? 0);
            }
        }
    } catch (PDOException $e) {
        $counts = ['Sep' => 0, 'Jan' => 0, 'May' => 0];
    }

    foreach (['Sep', 'Jan', 'May'] as $m) {
        $c = (int) ($counts[$m] ?? 0);
        $enrollmentIntakeTotal += $c;
        $enrollmentByIntake[] = [
            'key' => $m,
            'label' => $intakeMonthLabels[$m] ?? $m,
            'count' => $c,
        ];
    }

    echo json_encode([
        'success' => true,
        'kpis' => [
            'total_students' => $totalStudents,
            'total_lecturers' => $totalLecturers,
            'total_courses' => $totalCourses,
            'total_departments' => $totalDepartments,
            'average_gpa' => $averageGpaProfile,
            'average_assessment_pct' => $averageAssessmentPct,
            'headline_average' => $headlineAverage,
            'headline_kind' => $headlineKind,
        ],
        'students_by_department' => $studentsByDepartment,
        'gpa_distribution' => $gpaDistribution,
        'marks_distribution_total' => $marksDistributionTotal,
        'gpa_distribution_source' => count($scoreValues) > 0 ? 'assessment_scores' : 'student_profiles',
        'gpa_monthly_trend' => $gpaMonthlyTrend,
        'attendance_trend' => $attendanceTrend,
        'enrollment_by_intake' => $enrollmentByIntake,
        'enrollment_intake_years' => $enrollmentIntakeYears,
        'enrollment_intake_year_applied' => $enrollmentIntakeYearFilter,
        'enrollment_intake_total' => $enrollmentIntakeTotal,
    ]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Could not load analytics',
    ]);
}
