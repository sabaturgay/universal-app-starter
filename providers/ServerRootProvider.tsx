import React from 'react'
import { UniversalRootProvider } from '@root/providers/UniversalRootProvider'

export type RootProviderProps = {
  children: React.ReactElement
  colorMode?: 'light' | 'dark'
}

export const RootProvider = (props: RootProviderProps) => {
  const { children, colorMode } = props
  return (
    <UniversalRootProvider colorMode={colorMode}>
      {children}
    </UniversalRootProvider>
  )
}
