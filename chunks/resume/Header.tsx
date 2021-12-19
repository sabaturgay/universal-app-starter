import React from 'react'
import {
  Icon,
  IconButton,
  Link,
  Stack,
  useColorMode,
} from 'native-base'
import { Paper } from '@components'
import { NavLink } from '@components/NavLink'

import { Ionicons } from '@expo/vector-icons'

export const Header = (props: any) => {
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
          href="/resume"
        >
          Home
        </NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink>Works</NavLink>
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

export default Header
