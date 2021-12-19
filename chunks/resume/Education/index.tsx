import { EducationSvg } from './EducationSvg'
import { HoverCard } from '@root/chunks/resume/HoverCard'
import { ActionLink } from '@root/chunks/resume/ActionLink'
import { Title } from '@root/chunks/resume/Title'
import { Paragraph } from '@root/chunks/resume/Paragraph'
import React from 'react'
import { SectionHeader } from '../SectionHeader'
import { useResumeProvider } from '@providers/ResumeProvider'

import {
  Box,
  Heading,
  ScrollView,
  Stack,
  Text,
} from 'native-base'

export const EducationFront = () => {
  const { education = [] } = useResumeProvider()
  const firstEducation = education[0]
  return (
    <Stack
      boxSize="full"
      alignItems="center"
      space="2"
    >
      <Box
        h="3/5"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          boxSize="40"
        >
          <EducationSvg
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        h="2/5"
        alignItems="center"
      >
        <Title
          fontSize="4xl"
          fontWeight="extrabold"
          w="2/3"
        >
          {`I graduated from ${firstEducation?.institution}`}
        </Title>
      </Box>
      <ActionLink>
        My studies
      </ActionLink>
    </Stack>
  )
}

export type EducationItemProps = {
  education: {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
  },
}

const EducationItem = (props: EducationItemProps) => {
  const {
    education: {
      institution,
      area,
      studyType,
      startDate,
      endDate,
    },
  } = props
  const startYear = new Date(startDate).getFullYear()
  const endYear = !endDate ? null : new Date(endDate).getFullYear()
  return (
    <Stack space="4">
      <Stack space="2">
        <Heading>
          {institution}
        </Heading>
        <Stack>
          <Paragraph
            fontSize="md"
            fontWeight="semibold"
          >
            {`${studyType}, ${area}`}
          </Paragraph>
          <Paragraph
            fontSize="md"
            fontWeight="semibold"
          >
            {!endYear ? `Since ${startYear}` : `${startYear} - ${endYear}`}
          </Paragraph>
        </Stack>
      </Stack>
    </Stack>
  )
}
export const EducationBack = () => {
  const { education } = useResumeProvider()
  return (
    <Box
      boxSize="full"
      // alignItems="center"
      justifyContent="center"
    >
      <SectionHeader
        title="Studies"
      />
      <ScrollView
        px="12"
        py="2"
      >
        <Stack
          space="4"
        >
          {
          education.map((educationItem) => (
            <EducationItem education={educationItem} />
          ))
        }
        </Stack>
      </ScrollView>
    </Box>
  )
}

export const EducationCard = () => (
  <HoverCard
    Front={EducationFront}
    Back={EducationBack}
  />
)

export default EducationCard