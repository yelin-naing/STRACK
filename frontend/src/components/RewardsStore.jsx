/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { HiOutlineGift } from 'react-icons/hi2'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const ACCENT = '#6366f1'

const REWARDS = [
  {
    id: 'food_drink',
    title: 'Food & drink vouchers',
    description: '£15 credit for campus cafés and selected partner outlets.',
    cost: 500,
    category: 'vouchers',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=640&q=80&auto=format&fit=crop',
  },
  {
    id: 'discount_local',
    title: 'Local business discount codes',
    description: 'Exclusive codes for shops and services near campus.',
    cost: 600,
    category: 'vouchers',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&q=80&auto=format&fit=crop',
  },
  {
    id: 'digital_custom',
    title: 'Digital customisation items',
    description: 'Wallpapers, icons, and profile themes for your STRACK account.',
    cost: 350,
    category: 'merchandise',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&q=80&auto=format&fit=crop',
  },
  {
    id: 'uni_merch',
    title: 'University merchandise',
    description: 'Hoodie, bottle, or cap from the official union store.',
    cost: 800,
    category: 'merchandise',
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=640&q=80&auto=format&fit=crop',
  },
  {
    id: 'recognition',
    title: 'Recognition',
    description: 'Certificate of achievement and spotlight on the leaderboard.',
    cost: 300,
    category: 'recognition',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=640&q=80&auto=format&fit=crop',
  },
  {
    id: 'print_credits',
    title: 'Print credits',
    description: '500 mono pages or equivalent colour printing.',
    cost: 250,
    category: 'credits',
    image:
    'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'charity',
    title: 'Charity donations',
    description: 'We donate £5 to your chosen university charity partner.',
    cost: 550,
    category: 'charity',
    image:
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'priority_booking',
    title: 'Priority booking',
    description: 'Register for modules and events one day before general release.',
    cost: 1000,
    category: 'privileges',
    image:
      'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=640&q=80&auto=format&fit=crop',
  },
]

function generateDemoPromoCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const segment = (n) =>
    Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
  return `STR-${segment(4)}-${segment(4)}`
}

function storageKey(email) {
  return `strack_redeemed_${(email || '').toLowerCase()}`
}

function loadRedeemed(email) {
  try {
    const raw = localStorage.getItem(storageKey(email))
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveRedeemed(email, items) {
  try {
    localStorage.setItem(storageKey(email), JSON.stringify(items))
  } catch (_) {}
}

const wrap = (dark) => css`
  max-width: 1120px;
  margin: 0 auto;
  color: ${dark ? '#f3f4f6' : '#111827'};
`

const headerRow = css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`

const titleBlock = css`
  h1 {
    font-size: clamp(1.5rem, 3vw, 1.85rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    margin: 0 0 0.35rem;
  }
  p {
    margin: 0;
    font-size: 0.95rem;
    color: #6b7280;
  }
`

const pointsPill = (dark) => css`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.1rem;
  border-radius: 14px;
  background: ${dark ? '#1f2937' : '#ffffff'};
  border: 1px solid ${dark ? '#374151' : '#e5e7eb'};
  box-shadow: ${dark ? 'none' : '0 4px 14px rgba(15, 23, 42, 0.06)'};
  min-width: 160px;
`

const pointsLabel = css`
  font-size: 0.75rem;
  font-weight: 600;
  font-family: inherit;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

const pointsNum = css`
  font-size: 1.65rem;
  font-weight: 800;
  font-family: inherit;
  color: ${ACCENT};
  letter-spacing: -0.02em;
`

const coinIcon = css`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.12), rgba(99, 102, 241, 0.22));
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ACCENT};
  flex-shrink: 0;
  svg {
    width: 22px;
    height: 22px;
  }
`

const sectionCard = (dark) => css`
  background: ${dark ? '#171717' : '#ffffff'};
  border: 1px solid ${dark ? '#374151' : '#e5e7eb'};
  border-radius: 16px;
  padding: 1.25rem 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: ${dark ? 'none' : '0 8px 30px rgba(15, 23, 42, 0.06)'};
`

const sectionHead = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 1.25rem;
  color: inherit;
  svg {
    width: 22px;
    height: 22px;
    color: ${ACCENT};
  }
`

const grid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const card = (dark) => css`
  border: 1px solid ${dark ? '#374151' : '#e5e7eb'};
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: ${dark ? '#111827' : '#fafafa'};
  transition: box-shadow 0.2s ease, transform 0.15s ease;
  &:hover {
    box-shadow: ${dark ? '0 8px 24px rgba(0,0,0,0.35)' : '0 8px 24px rgba(15, 23, 42, 0.08)'};
    transform: translateY(-2px);
  }
`

const imgWrap = css`
  aspect-ratio: 16 / 10;
  background: #e5e7eb;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const cardBody = css`
  padding: 0.9rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
`

const cardTitle = css`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
`

const cardDesc = css`
  font-size: 0.82rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.45;
  flex: 1;
`

const metaRow = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.25rem;
`

const costRow = css`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 700;
  font-size: 0.95rem;
  color: ${ACCENT};
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`

const pill = (dark) => css`
  font-size: 0.7rem;
  color: ${dark ? '#9ca3af' : '#6b7280'};
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  border: 1px solid ${dark ? '#4b5563' : '#d1d5db'};
  background: ${dark ? '#1f2937' : '#ffffff'};
  text-transform: lowercase;
`

const redeemBtn = css`
  width: 100%;
  margin-top: 0.65rem;
  padding: 0.65rem 0.9rem;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  background: ${ACCENT};
  color: #ffffff;
  transition: filter 0.15s ease, opacity 0.15s ease;
  &:hover:not(:disabled) {
    filter: brightness(1.06);
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`

const myRewardsBox = (dark) => css`
  min-height: 140px;
  border: 1px dashed ${dark ? '#4b5563' : '#d1d5db'};
  border-radius: 12px;
  padding: 1.25rem;
  font-size: 0.9rem;
  color: #9ca3af;
`

const redeemedList = css`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`

const redeemedItem = (dark) => css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.65rem 0.85rem;
  border-radius: 10px;
  background: ${dark ? '#1f2937' : '#f3f4f6'};
  font-size: 0.88rem;
  color: ${dark ? '#e5e7eb' : '#374151'};
`

const redeemedMeta = css`
  flex: 1;
  min-width: 0;
`

const redeemedTitle = css`
  font-weight: 600;
  margin-bottom: 0.35rem;
`

const promoCodeLine = (dark) => css`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.78rem;
  color: ${dark ? '#a5b4fc' : ACCENT};
  letter-spacing: 0.02em;
`

const ptsBadge = css`
  font-weight: 700;
  color: #6b7280;
  white-space: nowrap;
  font-size: 0.82rem;
`

const myRewardsHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`

const clearBtn = (dark) => css`
  border: 1px solid ${dark ? '#4b5563' : '#d1d5db'};
  background: ${dark ? '#1f2937' : '#ffffff'};
  color: ${dark ? '#e5e7eb' : '#374151'};
  border-radius: 8px;
  padding: 0.35rem 0.7rem;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover {
    background: ${dark ? '#111827' : '#f9fafb'};
    border-color: ${dark ? '#6b7280' : '#9ca3af'};
  }
`

const errBox = css`
  font-size: 0.85rem;
  color: #b91c1c;
  margin-bottom: 0.75rem;
`

const CoinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <circle cx="9" cy="12" r="6" />
    <circle cx="15" cy="12" r="6" />
  </svg>
)

function RewardsStore({ darkMode, userEmail, points, onPointsChange }) {
  const [redeemed, setRedeemed] = useState([])
  const [loading, setLoading] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    if (userEmail) setRedeemed(loadRedeemed(userEmail))
  }, [userEmail])

  const handleClearHistory = () => {
    setRedeemed([])
    saveRedeemed(userEmail, [])
  }

  const handleRedeem = async (r) => {
    if (!userEmail) {
      setError('Sign in again to redeem rewards.')
      return
    }
    if (points < r.cost) {
      setError('Not enough points for this reward.')
      return
    }
    setError('')
    setLoading((m) => ({ ...m, [r.id]: true }))
    try {
      const res = await fetch(`${apiBase}/backend/redeem_reward.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, rewardId: r.id }),
      })
      const data = await res.json()
      if (!data.success) {
        setError(data.message || 'Could not redeem.')
        if (typeof data.points === 'number') onPointsChange(data.points)
        return
      }
      onPointsChange(data.points)
      const next = [
        ...redeemed,
        {
          title: r.title,
          rewardId: r.id,
          cost: r.cost,
          at: new Date().toISOString(),
          promoCode: generateDemoPromoCode(),
        },
      ]
      setRedeemed(next)
      saveRedeemed(userEmail, next)
    } catch {
      setError('Network error.')
    } finally {
      setLoading((m) => ({ ...m, [r.id]: false }))
    }
  }

  return (
    <div css={wrap(darkMode)}>
      <div css={headerRow}>
        <div css={titleBlock}>
          <h1>Rewards Store</h1>
          <p>Redeem your points for exciting rewards</p>
        </div>
        <div css={pointsPill(darkMode)}>
          <div css={coinIcon}>
            <CoinIcon />
          </div>
          <div>
            <div css={pointsLabel}>Your points</div>
            <div css={pointsNum}>{points}</div>
          </div>
        </div>
      </div>

      {error ? (
        <div css={errBox} role="alert">
          {error}
        </div>
      ) : null}

      <div css={sectionCard(darkMode)}>
        <div css={sectionHead}>
          <HiOutlineGift aria-hidden />
          Available rewards
        </div>
        <div css={grid}>
          {REWARDS.map((r) => {
            const busy = !!loading[r.id]
            const cant = points < r.cost || busy
            return (
              <article key={r.id} css={card(darkMode)}>
                <div css={imgWrap}>
                  <img
                    src={r.image}
                    alt=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                <div css={cardBody}>
                  <h2 css={cardTitle}>{r.title}</h2>
                  <p css={cardDesc}>{r.description}</p>
                  <div css={metaRow}>
                    <span css={costRow}>
                      <CoinIcon />
                      {r.cost}
                    </span>
                    <span css={pill(darkMode)}>{r.category}</span>
                  </div>
                  <button
                    type="button"
                    css={redeemBtn}
                    disabled={cant}
                    onClick={() => handleRedeem(r)}
                  >
                    {busy ? '...' : 'Redeem'}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div css={sectionCard(darkMode)}>
        <div css={myRewardsHeader}>
          <div css={sectionHead}>My rewards</div>
          <button type="button" css={clearBtn(darkMode)} onClick={handleClearHistory} disabled={redeemed.length === 0}>
            Clear history
          </button>
        </div>
        <p
          css={css`
            font-size: 0.78rem;
            color: #9ca3af;
            margin: -0.5rem 0 0.85rem;
          `}
        >
          Demo: each redemption shows a random promo-style code for display only.
        </p>
        {redeemed.length === 0 ? (
          <div css={myRewardsBox(darkMode)}>Your redeemed rewards will appear here.</div>
        ) : (
          <ul css={redeemedList}>
            {redeemed.map((item, i) => (
              <li key={`${item.rewardId}-${i}`} css={redeemedItem(darkMode)}>
                <div css={redeemedMeta}>
                  <div css={redeemedTitle}>{item.title}</div>
                  {item.promoCode ? (
                    <div css={promoCodeLine(darkMode)}>Promo: {item.promoCode}</div>
                  ) : null}
                </div>
                <span css={ptsBadge}>-{item.cost} pts</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p
        css={css`
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: 0.5rem;
        `}
      >
        Reward images are from Unsplash (third-party photos).
      </p>
    </div>
  )
}

export default RewardsStore
