import React from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

export const useInitializer = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(true)

  // Load any resources or data that we need prior to rendering the app
  React.useMemo(() => {
    async function loadResourcesAndDataAsync() {
      try {
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
        // setLoadingComplete(true)
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
