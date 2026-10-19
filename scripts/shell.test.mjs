import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const app = readFileSync(new URL('../web/src/App.tsx', import.meta.url), 'utf8')
const manifest = JSON.parse(readFileSync(new URL('../web/public/manifest.json', import.meta.url), 'utf8'))

test('shell is the watertracker app and says the features are not built yet', () => {
  assert.match(app, /appId: 'watertracker'/)
  assert.match(app, /appName="Water Tracker"/)
  assert.match(app, /Coming soon/)
  assert.match(app, /aren't available yet/)
  assert.doesNotMatch(app, /APPNAME/)
})

test('v1 feature list matches the epic and reminders are not part of this version', () => {
  for (const name of ['Daily goal', 'One-tap cups', 'Today', 'History', 'Streaks', 'Private']) {
    assert.match(app, new RegExp(name))
  }
  assert.match(app, /Reminders come later/)
  assert.match(app, /does not send/)
  assert.doesNotMatch(app, /name: 'Reminders'/)
})

test('manifest names the app and declares a phone-width viewport', () => {
  assert.equal(manifest.name, 'Water Tracker')
  assert.equal(manifest.short_name, 'Water')
  assert.equal(manifest.display, 'standalone')
  assert.equal(manifest.min_viewport_width, 320)
  assert.match(manifest.description, /Coming soon/)
})
