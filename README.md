# Water Tracker

**Coming soon — a private water tracker: daily goal, one-tap cups, a progress ring, history and streaks. Offline, and nothing leaves your device.** A free app on
[FreeAppStore](https://freeappstore.online), live at https://watertracker.freeappstore.online.

Right now this is a shell: it lists the planned features, but none of them work yet. Progress is
tracked in the v1 epic on this repository.

## Develop

```bash
pnpm install
pnpm dev      # local dev server
pnpm build    # production build in web/dist
pnpm test     # shell copy check and typecheck
fas check     # FreeAppStore compliance checks
```

Pushes to `main` auto-deploy via GitHub Actions.

## License

MIT.
