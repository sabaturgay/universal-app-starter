// import { BlogPostCard } from '@components/cards/BlogPost'
import { SimpleGrid } from '@components'
import { ProfileSimple } from '@components/cards/ProfileSimple'
import { Viewport } from '@components/IntersectionObserver'
import { ScreenContainer } from '@components/ScreenContainer'
import { WithPlaceholder } from '@components/IntersectionObserver/placeholder'
import { ResumeProvider, useResumeProvider } from '@providers/ResumeProvider'
import {
  Box,
  Image,
  ScrollView,
  Stack,
} from 'native-base'
import dynamic from 'next/dynamic'
import React from 'react'
import { useWindowDimensions } from 'react-native'
// import BACKGROUND_IMAGE_LOW from '@assets/images/background-low.webp'

// const Comments = dynamic(() => import('../components/comments'))

const HistoryCard = dynamic(() => import('@root/chunks/resume/History'))
const ProjectsCard = dynamic(() => import('@root/chunks/resume/Projects'))
const SkillsCard = dynamic(() => import('@root/chunks/resume/Skills'))
const WorksCard = dynamic(() => import('@root/chunks/resume/Works'))
const EducationCard = dynamic(() => import('@root/chunks/resume/Education'))
const InterestsCard = dynamic(() => import('@root/chunks/resume/Interests'))
const InterestedByCard = dynamic(() => import('@root/chunks/resume/InterestedBy'))

// const SECTIONS = [
//   'work',
//   'volunteer',
//   'education',
//   'awards',
//   'publications',
//   'skills',
//   'languages',
//   'interests',
//   'references',
//   'projects',
//   'specific',
// ]
const SECTIONS = {
  History: HistoryCard,
  Projects: ProjectsCard,
  Skills: SkillsCard,
  Works: WorksCard,
  Education: EducationCard,
  Interests: InterestsCard,
  InterestedBy: InterestedByCard,
} as const

const ViewportAwareStack = WithPlaceholder(Stack, Box)

const Sections = Object.keys(SECTIONS).map((sectionName) => {
  const Section = SECTIONS[sectionName]
  return (
    <ViewportAwareStack
      key={sectionName}
      w={{ base: 340, sm: 'md' }}
      h="md"
      mx="auto"
      shadow="md"
      alignItems="center"
      bg="blueGray.200"
      rounded="2xl"
      overflow="hidden"
      _dark={{ bg: 'primary.900' }}
      _light={{
        borderColor: 'primary.900',
        borderWidth: '1',
      }}
    >
      <Section />
    </ViewportAwareStack>
  )
})
export default function Resume() {
  const { basics, resumeCustomization } = useResumeProvider()
  return (
    <ScreenContainer>
      <Box
        w="full"
        h="lg"
      >
        <Image
          position="absolute"
          boxSize="full"
          blurRadius={0.7}
          source={{ uri: resumeCustomization.imageHeader.url }}
          alt={resumeCustomization.imageHeader.alt}
        />
        <Box
          boxSize="full"
          position="absolute"
          bg="rgba(0, 0, 0, 0.4)"
        />
        <ProfileSimple
          name={basics.name}
          title={basics.label}
          image={basics.picture}
        />
      </Box>
      <SimpleGrid
        columns={{
          base: 1,
          lg: 2,
        }}
        space="16"
        marginTop="-16"
        pX="12"
        alignItems="center"
      >
        {Sections}
      </SimpleGrid>
    </ScreenContainer>
  )
}

const PROPS = {
  cards: [
    {},
    {},
  ],
}
