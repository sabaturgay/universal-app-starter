import { NetworkStatusProvider } from '@providers/NetworkStatus'
import React from 'react'
import { SimpleLoading } from '@components/loadings/Simple'
import { UniversalRootProvider } from '@root/providers/UniversalRootProvider'
import { initPersistor } from '@config/persistor'
import { useQueryClient } from 'react-query'

export type RootProviderProps = {
  children: React.ReactElement
  colorMode?: 'light' | 'dark'
}

export const RootProvider = (props: RootProviderProps) => {
  const { children, colorMode } = props
  const queryClient = useQueryClient()
  React.useMemo(() => {
    initPersistor(queryClient)
  }, [queryClient])
  return (
    <UniversalRootProvider colorMode={colorMode}>
      <React.Suspense fallback={<SimpleLoading />}>
        <NetworkStatusProvider>
          {children}
        </NetworkStatusProvider>
      </React.Suspense>

    </UniversalRootProvider>
  )
}
