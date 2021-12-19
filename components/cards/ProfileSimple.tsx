import {
  Box,
  Heading,
  Image,
  Stack,
} from 'native-base'
import React from 'react'

export type ProfileSimpleProps = {
  name: string;
  title: string;
  image: string;
}
export const ProfileSimple = (props: ProfileSimpleProps) => {
  const {
    name,
    image,
    title,
  } = props
  return (
    <Box
      w="3/4"
      mx="auto"
      my="auto"
      alignItems={{ base: 'center', md: 'flex-start' }}
    >
      <Stack
        direction="row"
        space="sm"
        alignItems="center"
      >
        <Image
          boxSize="32"
          rounded="full"
          resizeMode="cover"
          src={image}
          alt="avatar"
        />
        <Stack
          h="auto"
          space="xs"
        >
          <Heading
            fontSize="xl"
            fontWeight="extrabold"
            color="lightText"
          >
            {name}
          </Heading>
          <Heading
            fontWeight="bold"
            fontSize="md"
            color="lightText"
          >
            {title}
          </Heading>
        </Stack>

      </Stack>
    </Box>
  )
}

export const PROPS = {
  name: 'Turgay SABA',
  title: 'Full-stack Developer',
  image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHWbPkMXlD9Lg/profile-displayphoto-shrink_800_800/0/1519223271518?e=1643241600&v=beta&t=hKjRCXIuifqnCv3uoLbaud5sNyB4_-yTDCpo6x02Kn4',
}
