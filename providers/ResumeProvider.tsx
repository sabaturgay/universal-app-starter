import { createProvider } from 'colay-ui'
import { RESUME_DATA } from '@constants'

export const {
  Provider: ResumeProvider,
  useProvider,
} = createProvider({ value: RESUME_DATA })

export const useResumeProvider = () => useProvider()[0]
