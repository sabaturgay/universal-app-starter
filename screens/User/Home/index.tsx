import React from 'react'
import {
  Text,
  Button,
} from 'colay-native-base'
import { TabScreenProps } from '@components/Navigator'
import { ScreenContainer } from '@components'
import { useController } from './controller'
import { Body } from './chunks/Body'

export const Home = (props: TabScreenProps) => {
  const {
    navigation,
  } = props
  const [state, dispatch] = useController(props)

  return (
    <ScreenContainer>
      <Text>Home Screen</Text>
      <Body
        {...{ state, dispatch, navigation }}
      />
      <Button
        onPress={() => navigation.navigate('/')}
      >
        Go to index screen!
      </Button>
      <Button>
        Signout
      </Button>
      <Button>
        Delete User
      </Button>
    </ScreenContainer>
  )
}
