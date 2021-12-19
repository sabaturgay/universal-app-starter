import { TabScreenProps } from '@components/Navigator'
import { useDispatch } from '@hooks'
import { useSelector } from '@store'

export const ACTIONS = {
  FETCH: 'FETCH',
}

export const useController = (props: TabScreenProps) => {
  const [state, dispatch] = useDispatch(
    {
      isLoading: false,
    },
    async ({ type, payload }, update) => {
      switch (type) {
        case ACTIONS.FETCH: {
          update((draft) => {
            draft.isLoading = true
          })
          break
        }

        default:
          break
      }
    },

  )
  const [store] = useSelector(({ user }) => ({ user }))
  return [state, dispatch, store] as const
}
