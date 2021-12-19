import React from 'react'
import * as Font from 'expo-font'

const cache = {}

export type FontLoaderProps = {
  fonts: {
    [fontFamily: string]: Font.FontSource;
  }
  onFinish?: () => void
  onError?: (error: Error) => void
  children?: React.ReactChild
}
export const FontLoader = (props: FontLoaderProps) => {
  const {
    fonts,
    onFinish,
    onError,
    children,
  } = props
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync(fonts)
        onFinish?.()
      } catch (e) {
        console.warn(e)
        onError?.(e)
      } finally {
        setLoadingComplete(true)
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete ? children : null
}
