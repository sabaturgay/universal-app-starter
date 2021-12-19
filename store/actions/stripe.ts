import * as WebBrowser from 'expo-web-browser'
import { getQueryParams } from '@utils/qs'

export const checkout = async () => {
  const {
    url,
    type,
  } = await WebBrowser.openAuthSessionAsync(
    'http://localhost:3000/api/create-checkout-session?customerId=*****&priceId=******',
    'http://localhost:19006/payment',
    { showInRecents: false },
  )
  const {
    params
  } = getQueryParams(url)
  if (type === 'success' && params.status === 'success') {
    return true
  }
  return false
}
