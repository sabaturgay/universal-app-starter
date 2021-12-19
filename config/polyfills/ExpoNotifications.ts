import { isServer } from '@utils'

const ExpoNotifications = {
  getInstallationIdAsync: async () => '',
  getRegistrationInfoAsync: async () => ({}),
  setRegistrationInfoAsync: async (registrationInfo) => {

  },
  addListener: () => { },
  removeListeners: () => { },
}

// if (isServer()) {
//   require('expo-notifications/build/ServerRegistrationModule').default = ExpoNotifications
// }
