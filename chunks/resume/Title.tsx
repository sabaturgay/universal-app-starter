import React from 'react'
import { Heading, IHeadingProps } from 'native-base'

export type TitleProps = IHeadingProps

export const Title = (props: TitleProps) => (
  <Heading
    size="xl"
    fontWeight="bold"
    // color="lightText"
    {...props}
  />
)
