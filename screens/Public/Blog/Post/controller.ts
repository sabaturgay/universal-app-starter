import { TabScreenProps } from '@components/Navigator'
import { useDispatch } from '@hooks'
import { useQuery } from 'react-query'
import { getGithubFile } from '@lib/github'
import { processMarkdown } from '@utils'

export const ACTIONS = { FETCH: 'FETCH' }

export const useController = (props: TabScreenProps) => {
  const { route } = props
  const { id } = route.params ?? {}
  const {
    isLoading,
    data,
    error,
  } = useQuery(['post', id], async () => getGithubFile(
    'sabaturgay',
    'assets',
    `content/turgaysaba/blog/${id}`,
    'markdown',
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

        default:
          break
      }
    },
  )
  return [{
    ...state,
    isLoading,
    data,
    error,
  }, dispatch] as const
}
