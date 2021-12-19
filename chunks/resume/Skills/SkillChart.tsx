import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { useResumeProvider } from '@providers/ResumeProvider'
import { useColorModeValue, useToken } from 'native-base'

export const SkillChart = () => {
  const { skills = [] } = useResumeProvider()
  const n = 3
  const firstNSkills = skills.slice(0, n)
  const colorCreator = useColorModeValue(
    (index: number) => `rgba(0, 0, 0,${(0.5 / n) * (index + 1)})`,
    (index: number) => `rgba(112, 115, 113,${(1 / n) * (index + 1)})`,
  )
  const [lightText, darkText] = useToken('colors', ['lightText', 'darkText'])
  const textColor = useColorModeValue(darkText, lightText)
  const data = firstNSkills.map((skill, index) => ({
    id: skill.name,
    label: skill.name,
    value: skill.value,
    color: colorCreator(index),
  }))
  return (
    <ResponsivePie
      data={data}
      // colors="greys"
      // arcLinkLabelComponent={(props) => (
      //   <LabelComponent {...props} />
      // )}
      isInteractive={false}
      animate={false}
      enableArcLabels={false}
      colors={({ data }) => data.color}
      theme={{ labels: { text: { fill: textColor } } }}
      arcLabelsTextColor={textColor}
      margin={{
        top: 40, right: 90, bottom: 40, left: 80,
      }}
    />
  )
}

const LabelComponent = (props: any) => {
  const {
    datum, label, style,
  } = props
  return (
    <g
      transform={style.transform}
      style={{ pointerEvents: 'none' }}
    >
      <foreignObject>
        <text
          textAnchor="middle"
          dominantBaseline="central"
          fill={style.textColor}
          style={{
            fontSize: 10,
            fontWeight: 800,
          }}
        >
          {`${label}123`}
        </text>
      </foreignObject>
    </g>
  )
}
