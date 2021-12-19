import React from 'react'
import {
  Text,
  Button,
  Center,
} from 'colay-native-base'
import { TabScreenProps, ScreenContainer } from '@components'

export const NotFound = (props: TabScreenProps) => {
  const {
    navigation,
  } = props
  return (
    <ScreenContainer>
      <Center
        flex={1}
      >
        <Text>Ooops Not Found</Text>
        <Button
          onPress={() => navigation.navigate('/')}
        >
          Go to home screen!
        </Button>
      </Center>
    </ScreenContainer>
  )
}
