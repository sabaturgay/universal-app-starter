import { Paper } from '@components'
import { NavLink } from '@components/NavLink'
import { Ionicons } from '@expo/vector-icons'
import {
  Icon,
  IconButton,
  Stack,
  useColorMode,
} from 'native-base'
import React from 'react'

export const DefaultNavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Paper
      direction="row"
      justifyContent="space-between"
      px="4"
      alignItems="center"
      h="12"
      // bg="dark.50"
      shadow="7"
      _dark={{ bg: 'dark.50' }}
    >
      <Stack
        direction="row"
        space="2"
        h="8"
      >
        <NavLink
          href="/"
        >
          Home
        </NavLink>
        {/* <NavLink href="/blog">
          Blog
        </NavLink>
        <NavLink>
          Works
        </NavLink> */}
      </Stack>
      <Stack direction="row">
        <IconButton
          onPress={toggleColorMode}
          icon={(
            <Icon
              as={Ionicons}
              name={colorMode === 'dark' ? 'ios-sunny' : 'ios-moon'}
            />
)}
        />
      </Stack>
    </Paper>
  )
}
