import { isServer } from '@utils'

let NetInfo = { addEventListener: () => {} }

if (!isServer()) {
  NetInfo = require('@react-native-community/netinfo').default
}

export default NetInfo
