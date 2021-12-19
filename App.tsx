import '@config'
import { queryClient } from '@config/react-query'
import { useInitializer } from '@hooks'
import { RootProvider } from '@root/providers/ClientRootProvider'
import React from 'react'
import { QueryClientProvider } from 'react-query'
import './native-base-override/config'
import { Navigation } from './screens/navigation'

export default function App() {
  const isLoadingComplete = useInitializer()

  if (!isLoadingComplete) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RootProvider>
        <Navigation />
      </RootProvider>
    </QueryClientProvider>

  )
}
