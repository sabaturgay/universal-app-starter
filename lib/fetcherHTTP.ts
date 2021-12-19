import { store } from '@store'
import { buildQueryString } from '@utils/qs'
import { BACKEND } from '@constants'

type Params = {
  query?: any
  body?: any
  headers?: any
  method?: 'POST' | 'GET'
  isPublic?: boolean
}

export const fetcher = async <TData>(
  path: string, params: Params = {},
): Promise<TData> => {
  const { user } = store.getState()
  const {
    body,
    headers = {},
    query,
    method = 'GET',
    isPublic = false,
  } = params
  const res = await fetch(
    `${isPublic ? BACKEND.guestURL : BACKEND.graphqlURL}${path}${
      query ? `?${buildQueryString(query)}` : ''}`,
    {
      ...params,
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.idToken}`,
        ...headers,
      },
      body: JSON.stringify(body),
    },
  )
  const json = await res.json()

  if (json.errors) {
    const { message } = json.errors[0]

    throw new Error(message)
  }

  return json.data
}
