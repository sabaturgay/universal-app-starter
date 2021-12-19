import { StackNavigator } from '@components/Navigator'
import React from 'react'
import { Post } from './index'
import { Publish } from './Publish'

export const PostNavigation = () => (
  <StackNavigator>
    <StackNavigator.Screen
      name="/"
      component={Post}
    />
    <StackNavigator.Screen
      name="publish"
      component={Publish}
    />
  </StackNavigator>
)

export const PostLinking = {
  path: 'post',
  screens: {
    '/': {
      path: ':id',
    },
    publish: {
      path: 'publish',
    },
  },
}
