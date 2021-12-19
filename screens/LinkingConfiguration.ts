import * as Linking from 'expo-linking'
import * as Notifications from 'expo-notifications'
import {
  LinkingOptions,
} from '@react-navigation/native'
import { CLIENT } from '@constants'
import { UserLinking } from './User/navigation'
import { GuestLinking } from './Guest/navigation'

export const createLinkingConfiguration = (user): LinkingOptions<any> => ({
  prefixes: [CLIENT.url],
  config: {
    screens: {
      ...(
        user
          ? UserLinking
          : GuestLinking
      ),
      notFound: '*',
    },
  },
  getInitialURL: async () => {
    // First, you may want to do the default deep link handling
    // Check if app was opened from a deep link
    let url = await Linking.getInitialURL()

    if (url !== null) {
      return url
    }

    // Handle URL from expo push notifications
    const response = await Notifications.getLastNotificationResponseAsync()
    url = response?.notification.request.content.data.url

    return url
  },
  subscribe: (listener) => {
    const onReceiveURL = ({ url }: { url: string }) => listener(url)

    // Listen to incoming links from deep linking
    Linking.addEventListener('url', onReceiveURL)

    // Listen to expo push notifications
    const subscription = Notifications.addNotificationResponseReceivedListener((response) => {
      const { url } = response.notification.request.content.data

      // Any custom logic to see whether the URL needs to be handled
      // ...

      // Let React Navigation handle the URL
      listener(url)
    })

    return () => {
      // Clean up the event listeners
      Linking.removeEventListener('url', onReceiveURL)
      subscription.remove()
    }
  },

})
