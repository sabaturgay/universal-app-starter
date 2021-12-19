import { ScreenContainer } from '@components'
import { GithubButton } from '@components/buttons/GithubButton'
import { GoogleButton } from '@components/buttons/GoogleButton'
import { TabScreenProps } from '@components/Navigator'
import { NextSeo } from '@components/NextSeo'
import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Toast,
} from 'native-base'
import React from 'react'
import { useAuth, useDispatch } from '@hooks'
import * as actions from '@store/actions'
import { useFindManyPostQuery } from '@lib/graphql'

export default function Signin(props: TabScreenProps) {
  const [state, dispatch] = useController(props)
  const {
    data, loading, error,
  } = useFindManyPostQuery({})
  console.log('data', data, error, loading)
  return (
    <ScreenContainer
      isLoading={state.isLoading}
      imageBackground={{
        source: { uri: 'https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
        blurRadius: 2,
      }}
    >
      <NextSeo
        title="Signin"
        description="A short description goes here."
      />
      <Flex
        minH="100vh"
        alignItems="center"
        justifyContent="center"
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack
          space={8}
          mx="auto"
          maxW="lg"
          py={12}
          px={6}
        >
          <Stack alignItems="center">
            <Heading fontSize="xl">Sign in to your account</Heading>
            <Text
              fontSize="lg"
              color="gray.600"
            >
              to enjoy all of our cool
              {' '}
              <Link color="blue.400">features</Link>
              {' '}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded="lg"
            bg={useColorModeValue('white', 'gray.700')}
            shadow="lg"
            p={8}
          >
            <Stack space={4}>
              <Stack space={5}>
                <GoogleButton
                  onPress={() => dispatch(ACTIONS.SIGNIN, { provider: 'google' })}
                >
                  Sign in with Google
                </GoogleButton>
                <GithubButton
                  onPress={() => dispatch(ACTIONS.SIGNIN, { provider: 'github' })}
                >
                  Sign in with Github
                </GithubButton>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </ScreenContainer>
  )
}

const ACTIONS = {
  SIGNIN: 'SIGNIN',
  SIGNIN_COMPLETED: 'SIGNIN_COMPLETED',
}

const useController = (props: TabScreenProps) => {
  const [signinAsync] = useAuth()
  const [state, dispatch] = useDispatch(
    { isLoading: false },
    async ({ type, payload }, update) => {
      switch (type) {
        case ACTIONS.SIGNIN: {
          update((draft) => {
            draft.isLoading = true
          })
          const { provider } = payload
          const result = await signinAsync(provider)
          if (result.type === 'cancel' || result.type === 'dismiss') {
            console.log('Error', result)
            Toast.show({
              title: 'Something went wrong!',
              status: 'error',
              description: 'Please retry to signin',
            })
          } else {
            await actions.signin({
              providerName: provider,
              ...result.params.data,
            })
          }
          update((draft) => {
            draft.isLoading = false
          })
          break
        }

        default:
          break
      }
    },
  )
  return [state, dispatch] as const
}
