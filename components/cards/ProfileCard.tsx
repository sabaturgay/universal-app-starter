import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from 'native-base'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import PROFILE_IMAGE_LOW from '@assets/images/profile-low.webp'

export type ProfileCardProps = {
  name: string;
  title: string;
  summary: string;
  image: string;
  email: string;
  location: string;
  company: string;
}
export const ProfileCard = (props: ProfileCardProps) => {
  const {
    name,
    company,
    summary,
    image,
    email,
    location,
    title,
  } = props
  return (
    <Flex
      // bg={useColorModeValue('#F9FAFB', 'gray.600')}
      p={50}
      maxW="md"
      alignItems="center"
      justifyContent="center"
      mx="auto"
    >
      <Box
        w="sm"
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={56}
          resizeMode="cover"
          src={PROFILE_IMAGE_LOW}//{image}
          alt="avatar"
        />
        <Flex
          alignItems="center"
          px={6}
          py={3}
          bg="gray.900"
          flexDirection="row"
        >
          <Icon
            as={<Ionicons name="headset-sharp" />}
            boxSize={6}
            color="white"
          />
          <Heading
            mx={3}
            color="white"
            fontWeight="bold"
            fontSize="md"
          >
            {title}
          </Heading>
        </Flex>

        <Box
          py={4}
          px={6}
        >
          <Heading
            fontSize="md"
            fontWeight="bold"
            color={useColorModeValue('gray.800', 'white')}
          >
            {name}
          </Heading>

          <Text
            py={2}
            color={useColorModeValue('gray.700', 'gray.400')}
          >
            {summary}
          </Text>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue('gray.700', 'gray.200')}
            flexDirection="row"
          >
            <Icon
              as={<Ionicons name="briefcase-sharp" />}
              h={6}
              w={6}
              mr={2}
            />

            <Text
              px={2}
              fontSize="sm"
            >
              {company}
            </Text>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue('gray.700', 'gray.200')}
            flexDirection="row"
          >
            <Icon
              as={<Ionicons name="location-sharp" />}
              boxSize={6}
              mr={2}
            />

            <Text
              px={2}
              fontSize="sm"
            >
              {location}
            </Text>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue('gray.700', 'gray.200')}
            flexDirection="row"
          >
            <Icon
              as={<Ionicons name="mail-sharp" />}
              boxSize={6}
              mr={2}
            />

            <Text
              px={2}
              fontSize="sm"
            >
              {email}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export const PROPS = {
  name: 'Turgay SABA',
  title: 'Full-stack Developer',
  description: 'I am passionate person about web and mobile technologies. I started working as Full-stack Developer while at university, I have 5 years experience. I use modern development tools like React, ReactNative, TypeScript, GraphQL.',
  image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHWbPkMXlD9Lg/profile-displayphoto-shrink_800_800/0/1519223271518?e=1643241600&v=beta&t=hKjRCXIuifqnCv3uoLbaud5sNyB4_-yTDCpo6x02Kn4',
  email: 'turgaysaba@outlook.com',
  location: 'Amsterdam',
  company: 'My Company',
}
