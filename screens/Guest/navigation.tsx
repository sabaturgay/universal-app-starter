import {
  TabNavigator,
} from '@components'
import React from 'react'
import { PublicNavigation, PublicLinking } from '@screens/Public/navigation'
import { Signin } from './Signin'
import { Home } from './Home'

export const GuestNavigation = () => (
  <TabNavigator>
    <TabNavigator.Screen
      name="signin"
      component={Signin}
    />
    <TabNavigator.Screen
      name="home"
      component={Home}
    />
    <TabNavigator.Screen
      name="/"
      component={PublicNavigation}
    />
  </TabNavigator>
)

export const GuestLinking = {
  home: {
    path: 'home',
    screens: {
      home: '/',
    },
  },
  signin: {
    path: 'signin',
    screens: {

    },
  },
  ...PublicLinking,
}
