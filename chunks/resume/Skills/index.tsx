import { useResumeProvider } from '@providers/ResumeProvider'
import { ActionLink } from '@root/chunks/resume/ActionLink'
import { HoverCard } from '@root/chunks/resume/HoverCard'
import { Paragraph } from '@root/chunks/resume/Paragraph'
import { Title } from '@root/chunks/resume/Title'
import {
  Box,
  Image,
  ScrollView,
  Stack,
} from 'native-base'
import React from 'react'
import { SectionHeader } from '../SectionHeader'
import { SkillChart } from './SkillChart'

export const SkillsFront = () => {
  const { skills, resumeCustomization } = useResumeProvider()
  const firstSkill = skills?.[0]
  const firstSkillImage = resumeCustomization?.images?.[firstSkill?.name]
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
        <Image
          boxSize="40"
          resizeMode="cover"
          source={{ uri: firstSkillImage }}
        />
      </Box>
      <Box
        h="2/5"
        alignItems="center"
      >
        <Title
          fontSize="4xl"
          fontWeight="extrabold"
          w={{ base: '3/4', sm: '2/3' }}
        >
          {`I mainly write ${firstSkill.name} stuff`}
        </Title>
      </Box>
      <ActionLink>
        More skills
      </ActionLink>
    </Stack>
  )
}

export type SkillItemProps = {
  skill: {
    name: string;
    value: number;
  }
}
const SkillItem = (props: SkillItemProps) => {
  const { skill: { name, value } } = props
  return (
    <Stack
      direction="row"
      alignItems="center"
      space="2"
    >
      <Paragraph
        w="1/3"
        ellipsizeMode="tail"
        fontSize="md"
      >
        {name}
      </Paragraph>
      <Box flex={1}>
        <Box
          h="2"
          w={`${value}%`}
          bg="darkBlue.800"
          _dark={{ bg: 'lightText' }}
          borderRadius="full"
        />
      </Box>
    </Stack>
  )
}
export const SkillsBack = () => {
  const { skills } = useResumeProvider()
  return (
    <Box
      boxSize="full"
      justifyContent="center"
    >
      <SectionHeader
        title="Skills"
      />
      <ScrollView
        px="12"
        py="2"
      >
        <Stack
          space="3"
        >
          <Stack
            w="full"
            h="72"
          >
            <SkillChart />
          </Stack>
          <Paragraph
            fontSize="lg"
            fontWeight="bold"
          >
            I also master
          </Paragraph>
          <Stack
            space="4"
          >
            {
          skills.map((skill) => (
            <SkillItem skill={skill} />
          ))
        }
          </Stack>
        </Stack>
      </ScrollView>
    </Box>
  )
}

export const SkillsCard = () => (
  <HoverCard
    Front={SkillsFront}
    Back={SkillsBack}
  />
)

export default SkillsCard
