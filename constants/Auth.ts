import { BACKEND } from './Backend'
import { CLIENT } from './Client'

export const AUTH_PROVIDERS = {
  callbackURL: CLIENT.url,
  useProxy: false,
  // scheme: '',
  providers: {
    google: {
      discovery: {
        authorizationEndpoint: `${BACKEND.guestURL}/auth-google`,
      },
      config: {
        clientId: '**********************',
        scopes: ['identity', 'user', 'email', 'phone'],
      },
      useProxy: false,
    },
    github: {
      discovery: {
        authorizationEndpoint: `${BACKEND.guestURL}/auth-github`,
      },
      config: {
        clientId: '**********************',
        scopes: ['identity', 'user', 'email', 'phone'],
      },
      useProxy: false,
    },
  },
} as const
