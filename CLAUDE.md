# watertracker

Water Tracker: a private hydration log. Daily goal, one-tap cups, a progress ring, history and
streaks, all on the device. Currently a Coming soon shell (Today, About). Reminders are v2 and
wait on platform fas.push (freeappstore-online/platform#145).

- Live: https://watertracker.freeappstore.online
- Dev: `pnpm install && pnpm dev`
- Build: `pnpm build`
- Test: `pnpm test`
- Check: `fas check`
- Deploy: `git push origin main`

## Notes

- v1 stays local: no account, no tracking. Build every screen inside the SDK `Shell`.
- `initApp({ appId: 'watertracker' })` must stay the platform id. The display name is Water Tracker.

Platform conventions: https://raw.githubusercontent.com/freeappstore-online/freeappstore/main/SKILLS.md
