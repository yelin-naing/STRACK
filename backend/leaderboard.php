<?php
/**
 * Anonymous leaderboard (no names or emails in JSON).
 *
 * GET params:
 *   viewer_email (recommended) — used for is_me and for my_class cohort
 *   scope = public | my_class
 *     - public: all students, university-wide
 *     - my_class: same degree, year, and class_of as viewer (trimmed; null/empty match together)
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

$viewer = strtolower(trim($_GET['viewer_email'] ?? ''));
$scope = strtolower(trim($_GET['scope'] ?? 'public'));
if ($scope !== 'public' && $scope !== 'my_class') {
    $scope = 'public';
}

require_once __DIR__ . '/getConnection.php';

/** @return string|null */
function cohortNorm($v): ?string
{
    if ($v === null) {
        return null;
    }
    $t = trim((string) $v);
    return $t === '' ? null : $t;
}

try {
    $connection = getConnection();

    try {
        $connection->exec('ALTER TABLE strack_students ADD COLUMN class_of VARCHAR(10) DEFAULT NULL AFTER degree');
    } catch (PDOException $e) {
        if (strpos($e->getMessage(), 'Duplicate column') === false) {
            throw $e;
        }
    }

    $stmt = $connection->query('
        SELECT
            id,
            email,
            COALESCE(points, 0) AS points,
            COALESCE(attendance, 0) AS attendance,
            degree,
            year,
            class_of
        FROM strack_students
        ORDER BY points DESC, id ASC
    ');
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($scope === 'my_class') {
        if ($viewer === '') {
            echo json_encode([
                'success' => true,
                'scope' => $scope,
                'entries' => [],
                'message' => 'Sign in to see your class leaderboard.',
            ]);
            exit;
        }
        $vStmt = $connection->prepare('
            SELECT degree, year, class_of FROM strack_students
            WHERE LOWER(TRIM(email)) = :e LIMIT 1
        ');
        $vStmt->execute(['e' => $viewer]);
        $vRow = $vStmt->fetch(PDO::FETCH_ASSOC);
        if (!$vRow) {
            echo json_encode([
                'success' => true,
                'scope' => $scope,
                'entries' => [],
                'message' => 'Your account was not found. Ask an admin to add you as a student.',
            ]);
            exit;
        }
        $vd = cohortNorm($vRow['degree'] ?? null);
        $vy = cohortNorm($vRow['year'] ?? null);
        $vc = cohortNorm($vRow['class_of'] ?? null);

        $rows = array_values(array_filter($rows, static function ($r) use ($vd, $vy, $vc) {
            return cohortNorm($r['degree'] ?? null) === $vd
                && cohortNorm($r['year'] ?? null) === $vy
                && cohortNorm($r['class_of'] ?? null) === $vc;
        }));
    }

    $entries = [];
    foreach ($rows as $i => $r) {
        $pts = (int) $r['points'];
        $emailLower = strtolower(trim($r['email'] ?? ''));
        $isMe = $viewer !== '' && $emailLower === $viewer;
        $entries[] = [
            'rank' => $i + 1,
            'points' => $pts,
            'attendance' => (float) $r['attendance'],
            'label' => 'Student #' . ($i + 1),
            'is_me' => $isMe,
        ];
    }

    $payload = [
        'success' => true,
        'scope' => $scope,
        'entries' => $entries,
    ];
    if ($scope === 'my_class' && count($entries) === 0 && $viewer !== '') {
        $payload['message'] = 'No one else shares your degree, year, and class of yet. Ask an admin to set these on student records.';
    }

    echo json_encode($payload);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Server error']);
}
