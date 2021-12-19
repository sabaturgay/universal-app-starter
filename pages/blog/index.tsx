import { ScreenContainer } from '@components'
import { BlogPostCard, BLOG_POST_ACTIONS } from '@components/cards/BlogPost'
import { useDispatch } from '@hooks'
import { getGithubFile } from '@lib/github'
import { Heading } from 'native-base'
import React from 'react'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'

export default function Blog() {
  const [
    {
      error,
      isLoading,
      data,
    },
    dispatch,
  ] = useController()
  return (
    <ScreenContainer
      isLoading={isLoading}
      error={error}
    >
      {
          !isLoading && data.posts.map((post) => (
            <BlogPostCard
              data={post}
              dispatch={dispatch}
            />
          ))
        }
    </ScreenContainer>
  )
}

const ACTIONS = {
  FETCH: 'FETCH',
  ...BLOG_POST_ACTIONS,
}

const useController = () => {
  const router = useRouter()
  const {
    isLoading,
    data,
    error,
  } = useQuery(['blog'], async () => getGithubFile(
    'sabaturgay',
    'assets',
    'content/turgaysaba/data/blog.yml',
    'yml',
  ))
  const [state, dispatch] = useDispatch(
    {},
    async ({ type, payload }, update) => {
      switch (type) {
        case ACTIONS.FETCH: {
          // update((draft) => {
          //   draft.isLoading = true
          // })
          break
        }
        case ACTIONS.BLOG_POST_PRESS: {
          router.push(`/blog/${payload}`)
          break
        }
        case ACTIONS.BLOG_AUTHOR_PRESS: {
          // console.log('HEYY', payload)
          router.push('/resume')
          break
        }

        default:
          break
      }
    },
  )
  return [{
    ...state,
    data,
    isLoading,
    error,
  }, dispatch] as const
}

const MOCK_DATA = {
  posts: [
    {
      title: 'Example 1',
      id: 'id123',
      date: '2019-04-07',
      company: 'Full-stack Developer',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      categories: [
        'testing',
      ],
      author: {
        id: 'sabaturgay',
        name: 'Turgay Saba',
        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHWbPkMXlD9Lg/profile-displayphoto-shrink_800_800/0/1519223271518?e=1640217600&v=beta&t=WJl1_U1vpdqto-Qx6si_bkkX-XSfpiD304XQdLfS1S0',
      },
      description: 'Lorem ipsum Description Lorem ipsum Description Lorem ipsum Description Lorem ipsum Description Lorem ipsum Description',
    },
    {
      title: 'Example 2',
      id: 'id123',
      date: '2019-04-07',
      company: 'Full-stack Developer',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      categories: [
        'testing',
      ],
      author: {
        id: 'sabaturgay',
        name: 'Turgay Saba',
        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHWbPkMXlD9Lg/profile-displayphoto-shrink_800_800/0/1519223271518?e=1640217600&v=beta&t=WJl1_U1vpdqto-Qx6si_bkkX-XSfpiD304XQdLfS1S0',
      },
      description: 'Lorem ipsum Description Lorem ipsum Description Lorem ipsum Description Lorem ipsum Description Lorem ipsum Description',
    },
    {
      title: 'Example 3',
      id: 'id123',
      date: '2019-04-07',
      company: 'Full-stack Developer',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      categories: [
        'testing',
      ],
      author: {
        id: 'sabaturgay',
        name: 'Turgay Saba',
        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHWbPkMXlD9Lg/profile-displayphoto-shrink_800_800/0/1519223271518?e=1640217600&v=beta&t=WJl1_U1vpdqto-Qx6si_bkkX-XSfpiD304XQdLfS1S0',
      },
      description: 'Lorem ipsum Description Lorem ipsum Description Lorem ipsum Description Lorem ipsum Description Lorem ipsum Description',
    },
  ],

}
