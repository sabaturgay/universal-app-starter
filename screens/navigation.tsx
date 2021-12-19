import {
  NavigationContainer, navigationRef,
} from '@components'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useColorModeValue } from 'colay-native-base'
import React from 'react'
import { useSelector } from '@store'
import { createLinkingConfiguration } from '@root/screens/LinkingConfiguration'
import { UserNavigation } from './User/navigation'
import { GuestNavigation } from './Guest/navigation'

export const Navigation = () => {
  const theme = useColorModeValue(DefaultTheme, DarkTheme)
  const [user] = useSelector((state) => state.user)
  const LinkingConfiguration = React.useMemo(
    () => createLinkingConfiguration(user),
    [],
  )
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={theme}
      ref={navigationRef}
      documentTitle={{
        formatter: (options, route) => `${options?.title ?? route?.name} - My Cool App`,
        enabled: false,
      }}
    >
      {!user ? (
        <GuestNavigation />
      ) : (
      // User is signed in
        <UserNavigation />
      )}
    </NavigationContainer>
  )
}
