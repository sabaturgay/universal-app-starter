import { TabScreenProps } from '@components/Navigator'
import { useDispatch } from '@hooks'

export const ACTIONS = {
  FETCH: 'FETCH',
  NAVIGATE: 'NAVIGATE',
}

export const useController = (props: TabScreenProps) => {
  const {
    route,
  } = props
  const { id } = route.params ?? {}
  const [state, dispatch] = useDispatch(
    {
      isLoading: false,
      id,
    },
    async ({ type, payload }, update) => {
      switch (type) {
        case ACTIONS.NAVIGATE: {
          rootNavigation.navigate(payload.to)
          break
        }
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
  return [state, dispatch] as const
}
