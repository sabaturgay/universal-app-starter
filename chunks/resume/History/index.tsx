import { Ionicons } from '@expo/vector-icons'
import { useResumeProvider } from '@providers/ResumeProvider'
import { HoverCard } from '@root/chunks/resume/HoverCard'
import { Paragraph } from '@root/chunks/resume/Paragraph'
import { Title } from '@root/chunks/resume/Title'
import { ActionLink } from '@root/chunks/resume/ActionLink'
import {
  Box,
  Heading,
  Icon,
  ScrollView,
  Stack,
} from 'native-base'
import React from 'react'
import { SectionHeader } from '../SectionHeader'

export const HistoryFront = () => {
  const {
    basics: {
      label,
      location: {
        city,
        countryCode,
      },

    },
  } = useResumeProvider()
  return (
    <Box
      boxSize="full"
      // alignItems="center"
      justifyContent="center"
      p="12"
    >
      <Stack
        space="lg"
      >
        <Title
          fontSize="5xl"
          fontWeight="extrabold"
        >
          {label}
        </Title>
        <Stack
          space="xs"
          direction="row"
          alignItems="center"
        >
          <Icon
            as={Ionicons}
            name="location-sharp"
          />
          <Title
            fontSize="2xl"
          >
            {`${city}, ${countryCode}`}
          </Title>
        </Stack>

      </Stack>
      <ActionLink>
        More about me
      </ActionLink>
    </Box>
  )
}

export const HistoryBack = () => {
  const {
    basics: {
      label,
      location: {
        city,
        countryCode,
      },
    },
    specific: {
      work: { codingReason, codeExperienceYears },
      basics: { personalDescription },
      education: { studiesLevel },
    },
  } = useResumeProvider()
  return (
    <Box
      boxSize="full"
      justifyContent="center"
    >
      <SectionHeader
        title="Who?"
      />
      <ScrollView
        px="12"
      >
        <Stack
          space="sm"
          pb="8"
        >
          <Paragraph>
            {personalDescription}
          </Paragraph>
          <Title>
            Work Experience
          </Title>
          <Paragraph>{`${codeExperienceYears} years as a developer`}</Paragraph>
          <Title>
            Training
          </Title>
          <Paragraph>{`${studiesLevel} years higher education`}</Paragraph>
          <Title>
            How I started coding
          </Title>
          <Paragraph>{codingReason}</Paragraph>
        </Stack>
      </ScrollView>
    </Box>
  )
}

export const HistoryCard = () => (
  <HoverCard
    Front={HistoryFront}
    Back={HistoryBack}
  />
)

export default HistoryCard