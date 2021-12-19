import React from 'react'
import {
  Text,
  Button,
  Center,
  Box,
  Image,
  Flex,
  Avatar,
  Stack,
  Heading,
  useColorModeValue,
} from 'colay-native-base'
import { TabScreenProps } from '@components/Navigator'
import { ScreenContainer } from '@components'
import * as actions from '@store/actions'
import { useController } from './controller'

export const Profile = (props: TabScreenProps) => {
  const {
    navigation,
  } = props
  const [state, dispatch, store] = useController(props)

  return (
    <ScreenContainer>
      <Center py={6}>
        <Box
          maxW="xs"
          w="full"
          bg={useColorModeValue('white', 'gray.800')}
          shadow="2xl"
          rounded="md"
          overflow="hidden"
        >
          <Image
            h="120px"
            w="full"
            src="https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            resizeMode="cover"
          />
          <Flex
            mt={-12}
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              size="xl"
              src={store.user.photoURL}
              alt="Author"
              style={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: 'white',
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack
              space={0}
              alignItems="center"
              mb={5}
            >
              <Heading
                fontSize="lg"
                fontWeight={500}
                fontFamily="body"
              >
                {store.user.name}
              </Heading>
              <Text color="gray.500">Frontend Developer</Text>
            </Stack>

            <Stack
              direction="row"
              justifyContent="center"
              space={6}
            >
              <Stack
                space={0}
                alignItems="center"
              >
                <Text fontWeight={600}>23k</Text>
                <Text
                  fontSize="sm"
                  color="gray.500"
                >
                  Followers
                </Text>
              </Stack>
              <Stack
                space={0}
                alignItems="center"
              >
                <Text fontWeight={600}>23k</Text>
                <Text
                  fontSize="sm"
                  color="gray.500"
                >
                  Followers
                </Text>
              </Stack>
            </Stack>

            <Button
              w="full"
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color="white"
              rounded="md"
              _hover={{
                transform: 'translateY(-2px)',
                shadow: 'lg',
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
      </Center>
    </ScreenContainer>
  )
}
