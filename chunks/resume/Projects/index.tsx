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
  Image,
  ScrollView,
  Stack,
  Text,
} from 'native-base'
import React from 'react'
import { SectionHeader } from '../SectionHeader'
import BACK_IMAGE from '@assets/images/projects-background.webp'
// import BACK_IMAGE_BLUR_DATA_URL from '@assets/images/projects-background-low.webp'

export const ProjectsFront = () => {
  const { projects } = useResumeProvider()
  return (
    <Box
      boxSize="full"
      alignItems="center"
    >
      <Image
        w="full"
        h="1/2"
        resizeMode="cover"
        source={BACK_IMAGE}
      />
      <Box
        w={{ base: '3/5', sm: '1/2' }}
        h="1/2"
        justifyContent="center"
      >
        <Title
          fontSize="3xl"
          fontWeight="extrabold"
          alignItems="center"
        >
          {`My project: ${projects?.[0].name}`}
        </Title>
      </Box>
      <ActionLink>
        {`See ${projects.length} projects`}
      </ActionLink>
    </Box>
  )
}
// 'https://cdn.filestackcontent.com/resize=w:500/compress/dLXE4WC8S3mZFZNfClTK'

export type ProjectItem = {
  project: {
    date: string;
    description: string;
    images: string [];
    link: string;
    name: string;
  },
}
const ProjectItem = (props) => {
  const {
    project: {
      date,
      description,
      images = [],
      link,
      name,
    },
  } = props
  return (
    <Stack space="4">
      <Stack space="2">
        <Heading>
          {name}
        </Heading>
        <Paragraph
          fontSize="md"
          fontWeight="semibold"
        >
          {new Date(date).getFullYear()}
        </Paragraph>
      </Stack>
      <Paragraph>
        {description}
      </Paragraph>
      <Stack
        space="4"
        direction="row"
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
        <Stack
          space="2"
          direction="row"
          alignItems="center"
        >
          <Icon
            as={Ionicons}
            name="eye"
            size="xs"
          />
          <Paragraph fontSize="md">See more</Paragraph>
        </Stack>
      </Stack>
    </Stack>
  )
}
export const ProjectsBack = () => {
  const { projects } = useResumeProvider()
  return (
    <Box
      boxSize="full"
      // alignItems="center"
      justifyContent="center"
    >
      <SectionHeader
        bgImage={{ uri: BACK_IMAGE }}
        title="Projects"
      />
      <ScrollView
        px="12"
        py="2"
      >
        <Stack
          space="4"
        >
          {
          projects.map((project) => (
            <ProjectItem project={project} />
          ))
        }
        </Stack>
      </ScrollView>
    </Box>
  )
}

export const ProjectsCard = () => (
  <HoverCard
    Front={ProjectsFront}
    Back={ProjectsBack}
  />
)

export default ProjectsCard
