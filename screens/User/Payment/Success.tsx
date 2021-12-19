import React from 'react'
import {
  Text,
} from 'colay-native-base'
import { TabScreenProps } from '@components/Navigator'
import { ScreenContainer } from '@components'

export const Success = (props: TabScreenProps) => {
  const {
    navigation,
  } = props

  return (
    <ScreenContainer>
      <Text>Success Payment</Text>
    </ScreenContainer>
  )
}
