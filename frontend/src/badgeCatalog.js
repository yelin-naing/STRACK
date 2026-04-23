export const POMODORO_BADGE_MIN_SESSIONS = 10

export const BADGE_CATALOG = [
  {
    id: 'assignment-master',
    name: 'Assignment Master',
    icon: '📝',
    pointsAward: 900,
    unlockHint: 'Submit all assignments on time for the current term.',
  },
  {
    id: 'perfect-attendance',
    name: 'Perfect Attendance',
    icon: '⭐',
    pointsAward: 800,
    unlockHint: 'Maintain 100% attendance across all scheduled classes.',
  },
  {
    id: 'first-class-scholar',
    name: 'First Class Scholar',
    icon: '🎓',
    pointsAward: 1000,
    unlockHint: 'Achieve first-class level grades in your modules.',
  },
  {
    id: 'extra-mile',
    name: 'Extra Mile',
    icon: '🚀',
    pointsAward: 500,
    unlockHint: 'Complete optional academic activities and bonus tasks.',
  },
  {
    id: 'halfway-hero',
    name: 'Halfway Hero',
    icon: '🏆',
    pointsAward: 600,
    unlockHint: 'Reach the midpoint milestone of your degree progression.',
  },
  {
    id: 'rising-star',
    name: 'Rising Star',
    icon: '📈',
    pointsAward: 400,
    unlockHint: 'Show consistent improvement in academic performance.',
  },
  {
    id: 'peer-champion',
    name: 'Peer Champion',
    icon: '🤝',
    pointsAward: 250,
    unlockHint: 'Actively help classmates through peer support activities.',
  },
  {
    id: 'academic-contributor',
    name: 'Academic Contributor',
    icon: '✭',
    pointsAward: 300,
    unlockHint: 'Contribute to extracurricular academic events and initiatives.',
  },
  {
    id: 'pomodoro-focus',
    name: 'Pomodoro Focus',
    icon: '🍅',
    pointsAward: 200,
    unlockHint: `Complete at least ${POMODORO_BADGE_MIN_SESSIONS} Pomodoro sessions from the Study timer (each run must finish and be logged with a module).`,
  },
]

export function getBadgeById(id) {
  return BADGE_CATALOG.find((b) => b.id === id) || null
}

export function countUnlockedBadges(awards, pomoCount) {
  const idSet = new Set((awards || []).map((a) => a.badge_id).filter(Boolean))
  if (Number(pomoCount) >= POMODORO_BADGE_MIN_SESSIONS) {
    idSet.add('pomodoro-focus')
  }
  return idSet.size
}
