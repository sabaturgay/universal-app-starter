import React from 'react'
import { ITextProps, Text } from 'native-base'

export type ParagraphText = ITextProps

export const Paragraph = (props: ParagraphText) => (
  <Text
    // size="xl"
    // fontWeight="bold"
    // color="lightText"
    {...props}
  />
)
