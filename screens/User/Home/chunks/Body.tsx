import React from 'react'
import {
  Text,
  Button,
} from 'colay-native-base'
import { ScreenContainer } from '@components'
import { TabNavigatorProps } from '@components/Navigator'
import { ControllerProps } from '../controller'

export const Body = (props: TabNavigatorProps & ControllerProps) => {
  const {
    navigation,
    state,
    dispatch
  } = props

  return (
    <>
      <Text>Body Component</Text>
      <Button
        onPress={() => navigation.navigate('/')}
      >
        Go to index screen!
      </Button>
    </>
  )
}
