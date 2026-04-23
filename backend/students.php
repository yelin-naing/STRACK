<?php
/**
 * Students API - CRUD for strack_students
 * Optional cohort: intake_month (Sep|Jan|May), intake_year (2000–2100) — used with course intake for visibility.
 * GET: list all (with optional department filter)
 * POST: create (gpa, points, attendance default to 0)
 * PUT: update
 * DELETE: delete by id
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/getConnection.php';

$method = $_SERVER['REQUEST_METHOD'];

function ensureStudentIntakeColumns(PDO $connection): void
{
    try {
        $connection->exec('ALTER TABLE strack_students ADD COLUMN intake_month VARCHAR(8) DEFAULT NULL');
    } catch (PDOException $e) {
        if (stripos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }
    try {
        $connection->exec('ALTER TABLE strack_students ADD COLUMN intake_year SMALLINT UNSIGNED DEFAULT NULL');
    } catch (PDOException $e) {
        if (stripos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }
}

/** @return array{0: ?string, 1: ?int} */
function normalizeStudentIntake(array $input): array
{
    $allowedMonths = ['Sep', 'Jan', 'May'];
    $m = trim((string) ($input['intake_month'] ?? ''));
    $intakeMonth = in_array($m, $allowedMonths, true) ? $m : null;
    $y = (int) ($input['intake_year'] ?? 0);
    $intakeYear = $y >= 2000 && $y <= 2100 ? $y : null;

    return [$intakeMonth, $intakeYear];
}

try {
    $connection = getConnection();

    // Ensure class_of exists (older databases)
    try {
        $connection->exec('ALTER TABLE strack_students ADD COLUMN class_of VARCHAR(10) DEFAULT NULL AFTER degree');
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }

    ensureStudentIntakeColumns($connection);

    switch ($method) {
        case 'GET':
            try {
                $connection->exec("
                    CREATE TABLE IF NOT EXISTS strack_study_sessions (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        student_id INT NOT NULL,
                        course_id INT NOT NULL,
                        course_code VARCHAR(64) NOT NULL DEFAULT '',
                        course_name VARCHAR(255) NOT NULL DEFAULT '',
                        duration_minutes INT NOT NULL DEFAULT 25,
                        session_kind VARCHAR(32) NOT NULL DEFAULT 'pomodoro',
                        completed_at DATETIME NOT NULL,
                        INDEX idx_study_student_time (student_id, completed_at),
                        INDEX idx_study_course (course_id),
                        CONSTRAINT fk_study_student FOREIGN KEY (student_id) REFERENCES strack_students (id) ON DELETE CASCADE,
                        CONSTRAINT fk_study_course FOREIGN KEY (course_id) REFERENCES strack_courses (id) ON DELETE CASCADE
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
                ");
            } catch (PDOException $e) {
                if (stripos($e->getMessage(), 'already exists') === false && stripos($e->getMessage(), 'Duplicate') === false) {
                    // allow installs where FK creation fails once
                }
            }
            $stmt = $connection->query("
                SELECT s.id, s.student_id, s.full_name, s.email,
                       COALESCE(s.`password`, '') as student_pwd,
                       s.department, s.year, s.degree, s.class_of,
                       s.intake_month, s.intake_year,
                       COALESCE(s.gpa, 0) as gpa, COALESCE(s.points, 0) as points, COALESCE(s.attendance, 0) as attendance,
                       COALESCE(pcnt.cnt, 0) AS pomodoro_sessions_count
                FROM strack_students s
                LEFT JOIN (
                    SELECT student_id, COUNT(*) AS cnt
                    FROM strack_study_sessions
                    WHERE LOWER(TRIM(COALESCE(session_kind, 'pomodoro'))) = 'pomodoro'
                    GROUP BY student_id
                ) pcnt ON pcnt.student_id = s.id
                ORDER BY s.student_id
            ");
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            // Map student_pwd to password for frontend (avoid MySQL reserved word issues)
            foreach ($rows as &$r) {
                $r['password'] = $r['student_pwd'] ?? '';
                unset($r['student_pwd']);
            }
            unset($r);
            echo json_encode(['success' => true, 'students' => $rows]);
            break;

        case 'POST':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $studentId = trim($input['student_id'] ?? '');
            $fullName = trim($input['full_name'] ?? '');
            $email = trim($input['email'] ?? '');
            $password = trim($input['password'] ?? '');
            $department = trim($input['department'] ?? '');
            $year = trim($input['year'] ?? '');
            $degree = trim($input['degree'] ?? '');
            $classOf = trim($input['class_of'] ?? '');
            [$intakeMonth, $intakeYear] = normalizeStudentIntake($input);

            if (!$studentId || !$fullName || !$email || !$password) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Student ID, full name, email and password are required']);
                exit;
            }

            $dup = $connection->prepare(
                'SELECT id FROM strack_students WHERE LOWER(TRIM(email)) = LOWER(TRIM(:email)) LIMIT 1'
            );
            $dup->execute(['email' => $email]);
            if ($dup->fetch(PDO::FETCH_ASSOC)) {
                http_response_code(409);
                echo json_encode(['success' => false, 'error' => 'That email is already used by another student']);
                exit;
            }

            $stmt = $connection->prepare("
                INSERT INTO strack_students (student_id, full_name, email, password, department, year, degree, class_of, intake_month, intake_year, gpa, points, attendance)
                VALUES (:student_id, :full_name, :email, :password, :department, :year, :degree, :class_of, :intake_month, :intake_year, 0, 0, 0)
            ");
            $stmt->execute([
                'student_id' => $studentId,
                'full_name' => $fullName,
                'email' => $email,
                'password' => $password,
                'department' => $department ?: null,
                'year' => $year ?: null,
                'degree' => $degree ?: null,
                'class_of' => $classOf !== '' ? $classOf : null,
                'intake_month' => $intakeMonth,
                'intake_year' => $intakeYear,
            ]);
            $id = $connection->lastInsertId();
            echo json_encode(['success' => true, 'id' => (int) $id]);
            break;

        case 'PUT':
            $input = json_decode(file_get_contents('php://input'), true) ?: [];
            $id = (int) ($input['id'] ?? 0);
            $studentId = trim($input['student_id'] ?? '');
            $fullName = trim($input['full_name'] ?? '');
            $email = trim($input['email'] ?? '');
            $password = trim($input['password'] ?? '');
            $department = trim($input['department'] ?? '');
            $year = trim($input['year'] ?? '');
            $degree = trim($input['degree'] ?? '');
            $classOf = trim($input['class_of'] ?? '');
            [$intakeMonth, $intakeYear] = normalizeStudentIntake($input);

            if (!$id || !$studentId || !$fullName || !$email) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Id, student ID, full name and email are required']);
                exit;
            }

            $dup = $connection->prepare(
                'SELECT id FROM strack_students WHERE LOWER(TRIM(email)) = LOWER(TRIM(:email)) AND id <> :id LIMIT 1'
            );
            $dup->execute(['email' => $email, 'id' => $id]);
            if ($dup->fetch(PDO::FETCH_ASSOC)) {
                http_response_code(409);
                echo json_encode(['success' => false, 'error' => 'That email is already used by another student']);
                exit;
            }

            if ($password !== '') {
                $stmt = $connection->prepare("
                    UPDATE strack_students 
                    SET student_id = :student_id, full_name = :full_name, email = :email, password = :password,
                        department = :department, year = :year, degree = :degree, class_of = :class_of,
                        intake_month = :intake_month, intake_year = :intake_year
                    WHERE id = :id
                ");
                $stmt->execute([
                    'id' => $id,
                    'student_id' => $studentId,
                    'full_name' => $fullName,
                    'email' => $email,
                    'password' => $password,
                    'department' => $department ?: null,
                    'year' => $year ?: null,
                    'degree' => $degree ?: null,
                    'class_of' => $classOf !== '' ? $classOf : null,
                    'intake_month' => $intakeMonth,
                    'intake_year' => $intakeYear,
                ]);
            } else {
                $stmt = $connection->prepare("
                    UPDATE strack_students 
                    SET student_id = :student_id, full_name = :full_name, email = :email, 
                        department = :department, year = :year, degree = :degree, class_of = :class_of,
                        intake_month = :intake_month, intake_year = :intake_year
                    WHERE id = :id
                ");
                $stmt->execute([
                    'id' => $id,
                    'student_id' => $studentId,
                    'full_name' => $fullName,
                    'email' => $email,
                    'department' => $department ?: null,
                    'year' => $year ?: null,
                    'degree' => $degree ?: null,
                    'class_of' => $classOf !== '' ? $classOf : null,
                    'intake_month' => $intakeMonth,
                    'intake_year' => $intakeYear,
                ]);
            }
            echo json_encode(['success' => true]);
            break;

        case 'DELETE':
            $id = (int) ($_GET['id'] ?? 0);
            if (!$id) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Id is required']);
                exit;
            }
            $stmt = $connection->prepare("DELETE FROM strack_students WHERE id = :id");
            $stmt->execute(['id' => $id]);
            echo json_encode(['success' => true]);
            break;

        default:
            http_response_code(405);
            echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
