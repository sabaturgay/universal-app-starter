import React from 'react'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import { isBrowser } from 'colay-ui'
import { AUTH_PROVIDERS } from '@constants'

type ProviderName = keyof typeof AUTH_PROVIDERS.providers

try {
  WebBrowser.maybeCompleteAuthSession()
} catch (error) {

}

const redirectUri = `${AuthSession.makeRedirectUri({
  useProxy: AUTH_PROVIDERS.useProxy,
  scheme: AUTH_PROVIDERS.scheme,
  // scheme: 'your.app',
})}/signin`

export const useAuth = () => {
  React.useEffect(() => {
    if (!isBrowser) {
      WebBrowser.warmUpAsync()
    }

    return () => {
      if (!isBrowser) {
        WebBrowser.coolDownAsync()
      }
    }
  }, [])
  const startAsync = React.useCallback(async (providerName: ProviderName) => {
    const providerConfig = AUTH_PROVIDERS.providers[providerName]
    const authRequest = new AuthSession.AuthRequest({
      ...providerConfig.config,
      redirectUri,
    })
    const result = await authRequest.promptAsync({ ...providerConfig.discovery }, { useProxy: providerConfig.useProxy })
    return result
  }, [])
  return [startAsync]
}
