import * as SentryNative from 'sentry-expo'
import { isBrowser } from 'colay-ui'

SentryNative.init({
  dsn: '****************',
  enableInExpoDevelopment: true,
  debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
})

export const Sentry = isBrowser ? SentryNative.Browser : SentryNative.Native
