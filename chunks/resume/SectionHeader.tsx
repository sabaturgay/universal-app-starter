import {
  Box,
  Factory,
  Heading,
  IImageProps,
  Image,
  Stack,
  IHeadingProps,
} from 'native-base'
import React from 'react'

export type SectionHeaderProps = {
  title?: string;
  bgImage?: IImageProps['source'];
  heading?: IHeadingProps;
}

export const SectionHeader = (props: SectionHeaderProps) => {
  const {
    bgImage,
    title,
    heading = {},
  } = props
  return (
    <Box
      w="full"
      h="24"
    >
      {
        bgImage && (
          <Image
            boxSize="full"
            resizeMode="cover"
            source={bgImage}
            // borderTopLeftRadius="20"
            // borderTopRightRadius="20"
            position="absolute"
            zIndex={-1}
          />
        )
      }
      <Heading
        size="2xl"
        mt="4"
        ml="6"
        {...(bgImage ? { color: 'lightText' } : {})}
        {...heading}
      >
        {title}
      </Heading>
    </Box>
  )
}

export const PROPS = {
  name: 'Turgay SABA',
  title: 'Full-stack Developer',
  image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHWbPkMXlD9Lg/profile-displayphoto-shrink_800_800/0/1519223271518?e=1643241600&v=beta&t=hKjRCXIuifqnCv3uoLbaud5sNyB4_-yTDCpo6x02Kn4',
}
