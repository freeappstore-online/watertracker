import { useEffect, useState } from 'react'
import { initApp } from '@freeappstore/sdk'
import { BuildInfo, type NavItem, PageHeader, Shell } from '@freeappstore/sdk/ui'

const fas = initApp({ appId: 'watertracker' })

// The app's screens. Shell renders them as its navbar (<nav aria-label="Main">,
// current screen highlighted, a menu on phones). `title` becomes the browser
// tab title on that route.
const NAV: NavItem[] = [
  { label: 'Today', href: '/', title: 'Water Tracker' },
  { label: 'About', href: '/about', title: 'About — Water Tracker' },
]

// Planned v1 (see the epic on this repo). Reminders are v2, blocked on
// platform fas.push (freeappstore-online/platform#145).
const FEATURES = [
  { name: 'Daily goal', what: 'Set a goal yourself, or from your weight and activity.' },
  { name: 'One-tap cups', what: 'Log a drink in one tap, with cup sizes you choose.' },
  { name: 'Today', what: "A progress ring for how much of today's goal you've had." },
  { name: 'History', what: 'A chart of what you drank over past days.' },
  { name: 'Streaks', what: 'See how many days in a row you met your goal.' },
  { name: 'Private', what: 'Stored on this device only. No account, no tracking, and it works offline.' },
]

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname)

  // Keep the screen in step with the browser's back and forward buttons.
  useEffect(() => {
    const sync = () => setPath(window.location.pathname)
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  // Nav clicks switch screens without a page load. Shell scrolls to the top
  // and moves focus to the new screen's PageHeader.
  const navigate = (href: string) => {
    window.history.pushState(null, '', href)
    setPath(href)
  }

  return (
    <Shell app={fas} appName="Water Tracker" nav={NAV} onNavigate={navigate}>
      <div className="mx-auto w-full max-w-3xl p-4 sm:p-8">{path === '/about' ? <About /> : <Today />}</div>
      <BuildInfo />
    </Shell>
  )
}

function Today() {
  return (
    <>
      <PageHeader
        title="Water Tracker"
        description="Coming soon — a private water tracker: daily goal, one-tap cups, a progress ring, history and streaks. Offline, and nothing leaves your device."
      />
      <ComingSoon />
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {FEATURES.map((feature) => (
          <li key={feature.name} className="rounded-[var(--radius)] border border-[var(--line)] p-4">
            <p className="font-semibold text-[var(--ink)]">{feature.name}</p>
            <p className="text-sm text-[var(--muted)]">{feature.what}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

function About() {
  return (
    <>
      <PageHeader title="About" />
      <ComingSoon />
      <p className="mt-4 text-[var(--muted)]">
        Water Tracker will be a simple hydration log: a daily goal, one-tap cups, a progress ring,
        a history chart and streaks. Everything stays on your device and works offline. No account,
        no ads, no subscription.
      </p>
      <p className="mt-4 text-[var(--muted)]">
        Reminders come later. They wait on platform push (fas.push), so this version does not send
        any.
      </p>
      <p className="mt-4 text-[var(--muted)]">
        Water Tracker is a free, MIT-licensed app on{' '}
        <a href="https://freeappstore.online" className="underline">
          FreeAppStore
        </a>
        .
      </p>
    </>
  )
}

// Placeholder until the features are built. None of them work yet, so it says so plainly.
function ComingSoon() {
  return (
    <p className="rounded-[var(--radius)] border border-[var(--line)] bg-[var(--panel)] p-4 text-[var(--muted)]">
      Coming soon. Water Tracker is in development; the features below aren't available yet.
    </p>
  )
}
