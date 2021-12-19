import React from 'react'
import {
  Box,
  Button,
} from 'colay-native-base'
import { useForwardRef } from 'colay-ui'
import { WebView } from 'react-native-webview'
import BottomSheet from 'reanimated-bottom-sheet'

const LINKS = {
  signin: 'https://accounts.google.com/signin/v2/identifier?service=youtube',
  youtube: 'https://www.youtube.com/',
  deleteActivity: 'https://myactivity.google.com/activitycontrols/youtube?utm_source=my-activity',
}

const visitQueue = [
  'https://www.youtube.com/watch?v=NamyVrAHaFY',
  'https://www.youtube.com/watch?v=7i6vsNrXSnA',
  'https://www.youtube.com/watch?v=B63s6O4PmWA',
  'https://www.youtube.com/watch?v=XGcBAKHCYls',
  'https://www.youtube.com/watch?v=mWXQI0dur3k',
  'https://www.youtube.com/watch?v=Uv5YRl2J3zM',
  'https://www.youtube.com/watch?v=cr2B2BwRwaI',
  'https://www.youtube.com/watch?v=9rCin4en0Hs',
]

const LINK_VISIT_DURATION = 5000

const WebViewUI = React.forwardRef((props, forwarRef) => {
  const webviewRef = useForwardRef(forwarRef, {}, (ref) => ({
    go: (url: string) => {
      const redirectTo = `window.location = "${url}"`
      ref.current.injectJavaScript(redirectTo)
    },
  }))
  const handleWebViewNavigationStateChange = React.useCallback((newNavState) => {
    const {
      current: webview,
    } = webviewRef
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    return
    const { url } = newNavState
    if (!url) return

    // handle certain doctypes
    if (url.includes('.pdf')) {
      webview.stopLoading()
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      webview.stopLoading()
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      webview.stopLoading()
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://reactnative.dev/'
      const redirectTo = `window.location = "${newURL}"`
      webview.injectJavaScript(redirectTo)
    }
  }, [])
  return (
    <Box
      height="100%"
    >
      <WebView
        ref={webviewRef}
        style={{ flex: 1 }}
        source={{ uri: LINKS.youtube }}
      />
    </Box>
  )
})

export default (props) => {
  const {

  } = props
  const sheetRef = React.useRef()
  const webviewRef = React.useRef()
  
  return (
    <Box
      flex={1}
    >
      <Button
        onPress={() => {
          webviewRef.current.go(LINKS.signin)
          sheetRef.current.snapTo(2)
        }}
      >
        Signin to Youtube
      </Button>
      <Button
        onPress={() => {
          webviewRef.current.go(LINKS.deleteActivity)
          sheetRef.current.snapTo(2)
        }}
      >
        Clear History
      </Button>
      <Button
        onPress={() => {
          const process = () => {
            const url = visitQueue.shift()
            if (url) {
              webviewRef.current.go(url)
            }
          }
          process()
          setInterval(process, LINK_VISIT_DURATION)
          sheetRef.current.snapTo(2)
        }}
      >
        Start Process
      </Button>
      <Button
        onPress={() => {
          sheetRef.current.snapTo(2)
        }}
      >
        Show
      </Button>
      <Button
        onPress={() => {
          sheetRef.current.snapTo(0)
        }}
      >
        Close
      </Button>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[40, 300, 450]}
        initialSnap={0}
        enabledBottomClamp
        borderRadius={10}
        renderContent={() => <WebViewUI ref={webviewRef} />}
      />
    </Box>
  )
}
