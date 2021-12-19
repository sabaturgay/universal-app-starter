import React from 'react'
import { SimpleLoading } from '@components/loadings/Simple'
import { createStoreProvider } from 'colay-ui'
// import { auth } from '@cloud'
// import {
//   onAuthStateChanged,
// } from 'firebase/auth'

type StoreValue = {
  user: any
  expoPushToken?: string;
}

export const {
  // store,
  useSelector,
  store,
  Provider: StoreProvider,
} = createStoreProvider<StoreValue>(
  {
    // user: {
    //   name: 'John Doe2',
    //   email: 'ts@email.com',
    //   photoURL: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    // },
  },
  {
    fallback: (
      <SimpleLoading />
    ),
    // init: async (state) => {
    //   try {
    //     state.user = auth.currentUser
    //     onAuthStateChanged(auth, (user) => {
    //       if (user) {
    //         user.getIdTokenResult(true).then((result) => {
    //           const idToken = result.token
    //           store.update((draft) => {
    //             draft.user = user
    //             draft.user.idToken = idToken
    //             draft.user.claims = result.claims
    //           })
    //         })
    //       } else {
    //         store.update((draft) => {
    //           draft.user = user
    //         })
    //       }
    //     })
    //   } catch (error) {
    //     console.log('error', error)

    //   }
    //   return state
    // },
  },
)

// store.purge()
