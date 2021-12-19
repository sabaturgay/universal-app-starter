import React from 'react'
import { TabNavigator } from '@components'
import { Home } from './Home'
import { Profile } from './Profile'
import { Payment } from './Payment'
import { PublicLinking } from '../Public/navigation'

export const UserNavigation = () => (
  (
    <TabNavigator>
      <TabNavigator.Screen
        name="home"
        component={Home}
      />
      <TabNavigator.Screen
        name="profile"
        component={Profile}
      />
      <TabNavigator.Screen
        name="payment"
        component={Payment}
      />
    </TabNavigator>
  )
)

export const UserLinking = {
  home: {
    path: 'home',
    screens: {
      home: '/',
    },
  },
  profile: {
    path: 'profile',
    screens: {
      profile: '/',
    },
  },
  payment: {
    path: 'payment',
    screens: {
      // '/': '/',
      failed: {
        path: 'failed',
      },
      success: {
        path: 'success',
      },
    },
  },
  ...PublicLinking,
}
