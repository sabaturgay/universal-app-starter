import Constants from 'expo-constants'

import * as Linking from 'expo-linking'

export const URL_SCHEME = Constants.appOwnership === 'expo'
  ? Linking.createURL('/--/')
  : Linking.createURL('')

export const CLIENT = { url: URL_SCHEME }
