import * as Notifications from 'expo-notifications'
import React from 'react'
import * as actions from '@store/actions'
import { isServer } from '@utils'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

export const useNotifications = () => {
  // const notificationListener = React.useRef<(event: Notifications.Notification) => void>()
  // const responseListener = React.useRef<(event: Notifications.NotificationResponse) => void>()
  React.useEffect(() => {
    const call = async () => {
      await actions.registerForPushNotifications()
      // notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      //   console.log(notification)
      // })
      // responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      //   console.log(response)
      // })
    }
    if (isServer()) {
      call()
    }
    return () => {
      // Notifications.removeNotificationSubscription(notificationListener.current)
      // Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, [])
}
