import React from 'react'
import {
  Text,
  Button,
} from 'colay-native-base'
import { TabScreenProps, ScreenContainer } from '@components'
import { useController } from './controller'
import { CallToActionWithAnnotation } from './components/callToActionWithAnnotation'
import { CallToActionWithVideo } from './components/callToActionWithVideo'

export const Home = (props: TabScreenProps) => {
  const {
    navigation,
  } = props
  const [state, dispatch] = useController(props)
  return (
    <ScreenContainer
      scrollable
    >
      <CallToActionWithAnnotation />
      <CallToActionWithVideo />
    </ScreenContainer>
  )
}
