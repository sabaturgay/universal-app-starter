import { TabScreenProps } from '@components/Navigator'
import { useAuth, useDispatch } from '@hooks'
import * as actions from '@store/actions'
import { Toast } from 'colay-native-base'

export const ACTIONS = {
  SIGNIN: 'SIGNIN',
  SIGNIN_COMPLETED: 'SIGNIN_COMPLETED',
}

export const useController = (props: TabScreenProps) => {
  const [signinAsync] = useAuth()
  const [state, dispatch] = useDispatch(
    {
      isLoading: false,
    },
    async ({ type, payload }, update) => {
      switch (type) {
        case ACTIONS.SIGNIN: {
          update((draft) => {
            draft.isLoading = true
          })
          const { provider } = payload
          const result = await signinAsync(provider)
          if (result.type === 'cancel' || result.type === 'dismiss') {
            console.log('Error', result)
            Toast.show({
              title: 'Something went wrong!',
              status: 'error',
              description: 'Please retry to signin',
            })
          } else {
            await actions.signin({
              providerName: provider,
              ...result.params.data,
            })
          }
          update((draft) => {
            draft.isLoading = false
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
