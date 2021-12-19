import {
  deleteUser as firebaseDeleteUser,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithCredential,
  signOut,
} from 'firebase/auth'

// Sign in with credential from the Google user.
const auth = getAuth()

type SigninParams = {
  providerName: string;
  token: string,
  idToken: string,
  profile: {
    name: string;
    email?: string;
    picture?: string;
  };
  expiresIn: number
}

export const signin = async (params: SigninParams) => {
  const {
    providerName,
    token,
    idToken,
  } = params
  let credential
  switch (providerName) {
    case 'google':
      credential = GoogleAuthProvider.credential(idToken)
      break
    case 'github':
      credential = GithubAuthProvider.credential(token)
      break

    default:
      break
  }
  return signInWithCredential(auth, credential)
}

export const signout = async () => {
  signOut(auth)
}

export const deleteUser = async () => {
  const user = auth.currentUser!
  firebaseDeleteUser(user)
}

export const getToken = async () => {
  const user = auth.currentUser!
  return (await user.getIdTokenResult()).token
}

export const getIdToken = async () => {
  const user = auth.currentUser!
  return user.getIdToken()
}
