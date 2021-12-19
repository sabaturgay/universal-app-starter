import { useResumeProvider } from '@providers/ResumeProvider'
import { ActionLink } from '@root/chunks/resume/ActionLink'
import {
  Box,
  Image,
  Pressable,
  ScrollView,
  Stack,
  useDisclose,
} from 'native-base'
import React from 'react'
import { SectionHeader } from '../SectionHeader'
import { PagerController } from '../PagerController'
import { Pager } from '../Pager'

export type InterestItemProps = {
  interest: {
    name: string
    gifUrl?: string;
    imageUrl?: string;
  },
}

const InterestItem = (props: InterestItemProps) => {
  const {
    interest: {
      name,
      gifUrl,
      imageUrl,
    },
  } = props
  return (
    <Stack
      space="4"
      boxSize="full"
    >
      <Image
        source={{ uri: gifUrl ?? imageUrl }}
        boxSize="full"
      />
    </Stack>
  )
}

export const InterestsCard = () => {
  const { interests } = useResumeProvider()
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const {
    isOpen,
    onOpen,
    onToggle,
    onClose,
  } = useDisclose()
  return (
    <Pressable
      boxSize="full"
      cursor="default"
      onPress={onToggle}
      onHoverIn={onOpen}
      onHoverOut={onClose}
    >
      <Box
        boxSize="full"
      >
        <SectionHeader
          title="Hobbies"
          heading={{ color: 'lightText' }}
        />
        <Pager
          position="absolute"
          zIndex={-1}
          pagingEnabled
          horizontal
          contentContainerStyle={{ width: '100%', height: '100%' }}
          boxSize="full"
          showsHorizontalScrollIndicator={false}
          currentIndex={currentIndex}
          scrollEnabled={false}
        >
          {
            interests.map((interestItem) => (
              <Box
                boxSize="md"
              >
                <InterestItem interest={interestItem} />
              </Box>
            ))
          }
        </Pager>
        {
            isOpen
              ? (
                <Stack
                  position="absolute"
                  boxSize="full"
                >
                  <PagerController
                    currentIndex={currentIndex}
                    pages={interests.map((interestItem) => ({ title: interestItem.name }))}
                    onChange={setCurrentIndex}
                  />
                </Stack>
              )
              : (
                <ActionLink
                  color="lightText"
                  icon={{ color: 'lightText' }}
                >
                  See all hobbies
                </ActionLink>
              )
          }
      </Box>
    </Pressable>
  )
}

export default InterestsCard
