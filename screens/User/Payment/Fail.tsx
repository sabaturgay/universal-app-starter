import React from 'react'
import {
  Text,
} from 'colay-native-base'
import { TabScreenProps } from '@components/Navigator'
import { ScreenContainer } from '@components'

export const Fail = (props: TabScreenProps) => {
  const {
    navigation,
  } = props

  return (
    <ScreenContainer>
      <Text>Failed Payment</Text>
    </ScreenContainer>
  )
}
