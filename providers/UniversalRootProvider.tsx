import { GraphQLCMSClientProvider } from '@root/providers/GraphQLCMSClient'
import { GraphQLClientProvider } from '@root/providers/GraphQLClient'
import { HeadContextProvider } from '@components/HeadContext'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ScreenContainer } from '@components/ScreenContainer'
import { StatusBar } from 'expo-status-bar'
import { StoreProvider } from '@store'
import { isBrowser } from 'colay-ui'

import { colorModeManager, createNativeBaseConfig } from '@config/native-base'

export type UniversalRootProviderProps = {
  children: React.ReactElement
  colorMode?: 'light' | 'dark'
}

export const UniversalRootProvider = (props: UniversalRootProviderProps) => {
  const { children, colorMode } = props
  const NATIVE_BASE_CONFIG = React.useMemo(() => createNativeBaseConfig(colorMode), [colorMode])
  return (
    <NativeBaseProvider
      config={NATIVE_BASE_CONFIG}
      // colorModeManager={colorModeManager}
    >
      <GraphQLClientProvider>
        <GraphQLCMSClientProvider>
          {/* <Sentry.ErrorBoundary fallback={<Text>An error has occurred</Text>}> */}
          <HeadContextProvider
            defaultSeo={{ title: 'Native Starter' }}
          >
            <StoreProvider>
              <ScreenContainer
                flex={1}
                safeArea
                // scrollable
                width="full"
                hasFooter={false}// isWeb
              >
                <StatusBar />
                {children}
              </ScreenContainer>
            </StoreProvider>
          </HeadContextProvider>
          {isBrowser && <ReactQueryDevtools initialIsOpen={false} />}
          {/* </Sentry.ErrorBoundary> */}
        </GraphQLCMSClientProvider>
      </GraphQLClientProvider>
    </NativeBaseProvider>
  )
}
