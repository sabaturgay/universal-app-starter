import { TabNavigator } from '@components'
import React from 'react'
import { NotFound } from './NotFound'
import { PostNavigation, PostLinking } from './Post/navigation'
import { BlogNavigation, BlogLinking } from './Blog/navigation'

export const PublicNavigation = () => (
  (
    <TabNavigator>
      <TabNavigator.Screen
        name="blog"
        component={BlogNavigation}
      />
      <TabNavigator.Screen
        name="post"
        component={PostNavigation}
      />
      <TabNavigator.Screen
        name="notFound"
        component={NotFound}
      />

    </TabNavigator>
  )
)

export const PublicLinking = {
  '/': {
    path: '/',
    screens: {
      post: PostLinking,
      blog: BlogLinking,
    },
  },
}
