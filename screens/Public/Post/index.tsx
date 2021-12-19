import React from 'react'
import {
  Text,
  Button,
} from 'colay-native-base'
import { TabScreenProps, ScreenContainer } from '@components'
import { useController, ACTIONS } from './controller'

type Params = {
  id: string
}

export const Post = (props: TabScreenProps<Params>) => {
  const {
    rootNavigation,
  } = props
  const [state, dispatch] = useController(props)
  if (!state.id) {
    return (
      <Text>ID is required!</Text>
    )
  }
  return (
    <ScreenContainer>
      <Text>{`Post Screen: ${state.id}`}</Text>
      <Button
        onPress={() => rootNavigation.navigate('home')}
      >
        Go to index screen!
      </Button>
    </ScreenContainer>
  )
}
