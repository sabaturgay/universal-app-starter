import { initializeApp } from 'firebase/app'
// Import the functions you need from the SDKs you need
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getStorage, connectStorageEmulator } from 'firebase/storage'
import { IS_DEV } from '@utils'
import { isBrowser } from 'colay-ui'

const firebaseConfig = {
  apiKey: '****************',
  authDomain: '****************',
  databaseURL: '****************',
  projectId: '****************',
  storageBucket: '****************',
  messagingSenderId: '****************',
  appId: '****************',
  measurementId: '****************',
}

export const app = initializeApp(firebaseConfig)

// Initialize Firebase
export const auth = getAuth(app)
export const functions = getFunctions(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)

// if (IS_DEV) {
//   connectAuthEmulator(auth, 'http://localhost:9099')
//   connectFunctionsEmulator(functions, 'http://localhost', 5001)
//   connectFirestoreEmulator(firestore, 'http://localhost', 8080)
//   connectStorageEmulator(storage, 'http://localhost', 9199)
// }

if (isBrowser) {
  const { getRemoteConfig, fetchAndActivate } = require('firebase/remote-config')
  const { getAnalytics } = require('firebase/analytics')
  const analytics = getAnalytics(app)
  const remoteConfig = getRemoteConfig(app)
  remoteConfig.settings = {
    fetchTimeoutMillis: 6000,
    minimumFetchIntervalMillis: 1, // very short interval for fields expiration.
  }

  remoteConfig.defaultConfig = ({ backendUrl: 'http://local' })

  fetchAndActivate(remoteConfig)
    .then(() => {

    })
    .catch((err) => {
      console.error(err)
    })
}
