import {
  useCreateOnePostMutation,
  useFindManyPostQuery,
} from '@lib/graphql'
import React from 'react'
import { View, Button } from 'colay-native-base'
import {
  useQueryClient,
} from 'react-query'

export const B = () => {
  const queryClient = useQueryClient()
  const mutation = useCreateOnePostMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(
        useFindManyPostQuery.getKey({}),
      )
    },
  })

  return (
    <View>
      <Button
        onPress={() => {
          mutation.mutate({
            data: {
              body: '132',
              slug: 'Slugg',
              title: 'Title123123',
              user: {},
            },
          })
        }}
      >
        Add Todo
      </Button>
    </View>
  )
}
