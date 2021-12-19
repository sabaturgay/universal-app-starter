import { HoverCard } from '@root/chunks/resume/HoverCard'
import React from 'react'
import { useResumeProvider } from '@providers/ResumeProvider'
import { ActionLink } from '@root/chunks/resume/ActionLink'
import { Title } from '@root/chunks/resume/Title'

import { Box, Heading } from 'native-base'

export const InterestedByFront = () => {
  const { specific = {} } = useResumeProvider()
  const { interestedBy } = specific
  return (
    <Box
      boxSize="full"
      alignItems="center"
      justifyContent="center"
      bg="primary.900"
    >
      <Title
        fontSize="4xl"
        w="3/5"
        fontWeight="bold"
        ellipsizeMode="tail"
        numberOfLines={5}
        color="lightText"
      >
        {`Interested by:\n\n${interestedBy}`}
      </Title>
      <ActionLink
        color="lightText"
        icon={{ color: 'lightText' }}
      >
        See all
      </ActionLink>
    </Box>
  )
}

export const InterestedByBack = () => {
  const { specific = {} } = useResumeProvider()
  const { interestedBy } = specific
  return (
    <Box
      boxSize="full"
      justifyContent="center"
      alignItems="center"
    >
      <Title
        fontSize="4xl"
        w="4/5"
        fontWeight="bold"
      >
        {`Interested by:\n\n${interestedBy}`}
      </Title>
    </Box>
  )
}

export const InterestedByCard = () => (
  <HoverCard
    Front={InterestedByFront}
    Back={InterestedByBack}
  />
)

export default InterestedByCard
