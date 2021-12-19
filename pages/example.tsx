import { COOKIES } from '@constants'
import Head from 'next/head'
import React from 'react'
import { useCookies } from 'react-cookie'

import {
  Box,
  Button,
  Heading,
  Text,
  useBreakpointValue,
  useColorMode,
} from 'native-base'

const Home = () => {
  const [, setCookie] = useCookies([COOKIES.colorMode])
  const { colorMode, toggleColorMode } = useColorMode()
  const val = useBreakpointValue({
    base: 'BASE', md: 'MD', lg: 'LG', xl: 'XL23',
  })
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Text>Heyy</Text>
      <Box
        boxSize="sm"
        bg={{ base: 'black', md: 'yellow.100' }}
      />
      <Text
        bold
        italic
        underline
      >
        bold Italic underline
      </Text>
      {' '}
      <Heading bold>
        <Text italic>
          <Text underline>
            <Text>bold Italic underline NESTED</Text>
          </Text>
        </Text>
      </Heading>
      <Button
        onPress={() => {
          const newColorMode = colorMode === 'dark' ? 'light' : 'dark'
          toggleColorMode()
          setCookie(COOKIES.colorMode, newColorMode, {
            path: '/',
            maxAge: 3600, // Expires after 1hr
            // sameSite: true,
          })
        }}
      >
        Change Theme Mode
      </Button>
    </Box>
  )
}

export default Home

export const getServerSideProps = async () => ({ props: { heyy: 'hey' } })
