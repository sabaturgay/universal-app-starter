import React from 'react'
import {
  Stack,
  Icon,
  Heading,
  Factory,
} from 'native-base'
import { TouchableOpacity as RNTouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const TouchableOpacity = Factory(RNTouchableOpacity)

type Page = {
  title: string;
}

export type PagerControllerProps = {
  currentIndex: number;
  pages: Page[];
  onChange: (index: number) => void;
}

export const PagerController = (props: PagerControllerProps) => {
  const {
    currentIndex,
    pages,
    onChange,
  } = props
  const currentPage = pages[currentIndex]
  const onChangeCallback = (forward: boolean) => {
    onChange((currentIndex + (forward ? 1 : -1) + pages.length) % pages.length)
  }
  return (
    <Stack
      boxSize="full"
      justifyContent="center"
    >
      <Stack
        position="absolute"
        opacity={0.4}
        boxSize="full"
        bgColor="dark.100"
      />
      <Stack
        direction="row"
        width="full"
        justifyContent="space-between"
      >
        <TouchableOpacity
          onPress={() => onChangeCallback(false)}
          bg="light.200"
          borderRadius="full"
          boxSize="10"
          margin="2"
          justifyContent="center"
          alignItems="center"
          _dark={{ bg: 'dark.200' }}
        >
          <Icon
            as={Ionicons}
            name="chevron-back"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onChangeCallback(true)}
          bg="light.200"
          borderRadius="full"
          boxSize="10"
          margin="2"
          justifyContent="center"
          alignItems="center"
          _dark={{ bg: 'dark.200' }}
        >
          <Icon
            as={Ionicons}
            name="chevron-forward"
          />
        </TouchableOpacity>
        {/* <IconButton
          icon={(
            <Icon
              as={Ionicons}
              name="chevron-forward"
            />
)}
          onPress={() => onChangeCallback(true)}
        /> */}
      </Stack>
      <Stack
        position="absolute"
        bottom="0"
        height="20"
        space="4"
        width="full"
        alignItems="center"
      >
        <Heading
          color="lightText"
        >
          {currentPage.title}
        </Heading>
        <Stack
          direction="row"
          space="2"
        >
          {
          pages.map((page, index) => (
            <Stack
              boxSize="2"
              borderRadius="full"
              bg={index === currentIndex ? 'lightText' : 'dark.200'}
              // _light={{ bg: index !== currentIndex ? 'lightText' : 'dark.200' }}
            />
          ))
        }
        </Stack>
      </Stack>
    </Stack>
  )
}
