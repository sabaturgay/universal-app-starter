import React from 'react'
import {
  Text,
  Button,
} from 'colay-native-base'
import { TabScreenProps } from '@components/Navigator'
import { ScreenContainer } from '@components'
import * as actions from '@store/actions'

export const Payment = (props: TabScreenProps) => {
  const {
    navigation,
  } = props
  return (
    <ScreenContainer>
      <Text>Payment Screen</Text>
      <Button
        onPress={() => actions.checkout()}
      >
        Subscribe
      </Button>
    </ScreenContainer>
  )
}
