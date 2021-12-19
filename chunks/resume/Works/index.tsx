import { Ionicons } from '@expo/vector-icons'
import { useResumeProvider } from '@providers/ResumeProvider'
import { HoverCard } from '@root/chunks/resume/HoverCard'
import { Paragraph } from '@root/chunks/resume/Paragraph'
import { ActionLink } from '@root/chunks/resume/ActionLink'
import { Title } from '@root/chunks/resume/Title'
import {
  Box,
  Heading,
  Icon,
  Link,
  ScrollView,
  Stack,
  Text,
} from 'native-base'
import React from 'react'
import { SectionHeader } from '../SectionHeader'

export const WorksFront = () => {
  const { work = [] } = useResumeProvider()
  const firstWork = work[0]
  return (
    <Box
      boxSize="full"
      alignItems="center"
      justifyContent="center"
    >
      <Title
        fontSize="4xl"
        w={{ base: '3/4', sm: '2/3' }}
        fontWeight="extrabold"
      >
        {`${firstWork?.position} @${firstWork?.name}`}
      </Title>
      <ActionLink>
        See all experiences
      </ActionLink>
    </Box>
  )
}

export type WorkItemProps = {
  work: {
    name: string
    position?: string;
    website?: string;
    summary?: string;
    location?: string;
    startDate: string;
    place?: { name: string };
  },
}

const WorkItem = (props: WorkItemProps) => {
  const {
    work: {
      name,
      position,
      website,
      summary,
      location,
      startDate,
      endDate,
      stillEmployed,
    },
  } = props
  const startYear = new Date(startDate).getFullYear()
  const endYear = stillEmployed ? null : new Date(endDate).getFullYear()
  return (
    <Stack space="4">
      <Stack space="2">
        <Heading>
          {position}
        </Heading>
        <Stack>
          <Paragraph
            fontSize="md"
            fontWeight="semibold"
          >
            {`${name} - ${location}`}
          </Paragraph>
          <Paragraph
            fontSize="md"
            fontWeight="semibold"
          >
            {stillEmployed ? `Since ${startYear}` : `${startYear} - ${endYear}`}
          </Paragraph>
        </Stack>
      </Stack>
      <Paragraph>
        {summary}
      </Paragraph>
      <Stack
        space="4"
        direction="row"
      >
        {website && (
          <Link
            href={website}
          >
            <Stack
              space="2"
              direction="row"
              alignItems="center"
            >
              <Icon
                as={Ionicons}
                name="link"
                size="xs"
              />
              <Paragraph fontSize="md">Link</Paragraph>
            </Stack>

          </Link>
        )}
      </Stack>
    </Stack>
  )
}
export const WorksBack = () => {
  const { work } = useResumeProvider()
  return (
    <Box
      boxSize="full"
      // alignItems="center"
      justifyContent="center"
    >
      <SectionHeader
        title="Experiences"
      />
      <ScrollView
        px="12"
        py="2"
      >
        <Stack
          space="4"
        >
          {
          work.map((workItem) => (
            <WorkItem work={workItem} />
          ))
        }
        </Stack>
      </ScrollView>
    </Box>
  )
}

export const WorksCard = () => (
  <HoverCard
    Front={WorksFront}
    Back={WorksBack}
  />
)

export default WorksCard