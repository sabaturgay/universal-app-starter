import { ScreenContainer, TabScreenProps } from '@components'
import { BlogPostCard } from '@components/cards/BlogPost'
import {
  Heading,
} from 'colay-native-base'
import React from 'react'
import { useController } from './controller'

export const Blog = (props: TabScreenProps) => {
  const [
    {
      error,
      isLoading,
      data,
    },
    dispatch,
  ] = useController(props)

  return (
    <ScreenContainer
      isLoading={isLoading}
      error={error}
      scrollable
    >
      <Heading>Posts</Heading>
      {
          data.posts.map((data) => (
            <BlogPostCard
              data={data}
              dispatch={dispatch}
            />
          ))
        }
    </ScreenContainer>
  )
}
