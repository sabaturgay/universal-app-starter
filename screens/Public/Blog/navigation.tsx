import { StackNavigator } from '@components'
import React from 'react'
import { Blog } from './index'
import { Post } from './Post'

export const BlogNavigation = () => (
  (
    <StackNavigator>
      <StackNavigator.Screen
        name="/:id"
        component={Post}
      />
      <StackNavigator.Screen
        name="/"
        component={Blog}
      />
    </StackNavigator>
  )
)

export const BlogLinking = {
  path: 'blog',
  screens: {
    '/': '',
    '/:id': ':id',
  },
}
