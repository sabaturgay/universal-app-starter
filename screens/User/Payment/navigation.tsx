import React from 'react'
import { TabNavigator } from '@components'
import { Success } from './Success'
import { Payment } from './index'
import { Fail } from './Fail'

export const UserNavigation = () => (
  (
    <TabNavigator>
      <TabNavigator.Screen
        name="/"
        component={Payment}
      />
      <TabNavigator.Screen
        name="failed"
        component={Fail}
      />
      <TabNavigator.Screen
        name="success"
        component={Success}
      />
    </TabNavigator>
  )
)
