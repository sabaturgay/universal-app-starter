import { useOnlineManager } from '@hooks/useOnlineManager'
import { isBrowser, useAppState } from 'colay-ui'
import * as SplashScreen from 'expo-splash-screen'
import React from 'react'
import { AppStateStatus } from 'react-native'
import { focusManager } from 'react-query'
import { useNotifications } from '../useNotifications'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (!isBrowser) {
    focusManager.setFocused(status === 'active')
  }
}

export const useInitializer = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  useAppState({ onChange: onAppStateChange })
  useOnlineManager()
  // useNotifications()

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // Load fonts
        Font.loadAsync({
          ionicons: {
            uri: Ionicons.font.ionicons,
            display: Font.FontDisplay.SWAP,
          },
          // 'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
