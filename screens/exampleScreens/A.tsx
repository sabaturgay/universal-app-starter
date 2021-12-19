import React from 'react'
import { View, Text } from 'colay-native-base'
import { useFindManyPostQuery } from '@lib/graphql'

const PAGE_COUNT = 2

export const A = () => {
  const [skip, setSkip] = React.useState(0)
  // Queries
  const {
    data,
    isLoading,
    error,
  } = useFindManyPostQuery(
    {
      skip,
    },
    {
      keepPreviousData: true,
    },
  )
  if (isLoading) {
    return <Text>Loading...</Text>
  }
  if (error) {
    return <Text>{`error: ${JSON.stringify(error)}`}</Text>
  }
  return (
    <View>
      <View>
        {data?.findManyPost?.map((post) => (
          <Text key={post.id}>{post.title}</Text>
        ))}
      </View>
    </View>
  )
}
