import React from 'react'
import {
  Text,
  Button,
} from 'colay-native-base'
import { TabScreenProps, ScreenContainer } from '@components'
import { useController } from './controller'

export const Publish = (props: TabScreenProps) => {
  const {
    rootNavigation,
  } = props
  const [state, dispatch] = useController(props)
  return (
    <ScreenContainer>
      <Text>Publish Screen</Text>
      <Button
        onPress={() => rootNavigation.navigate('home')}
      >
        Go to Home screen!
      </Button>
    </ScreenContainer>
  )
}
