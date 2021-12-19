// import {
//   getAuth, signInWithCredential,
//   GoogleAuthProvider,
//   GithubAuthProvider,
//   signOut,
//   deleteUser as firebaseDeleteUser,
// } from 'firebase/auth'
import {
  deleteUser as cloudDeleteUser,
  signin as cloudSignin,
  signout as cloudSignout,
} from '@cloud'

// Sign in with credential from the Google user.
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
  // const {
  //   providerName,
  //   token,
  //   idToken,
  // } = params
  const signedUser = await cloudSignin(params)
  console.log('signedUser', signedUser)
  const { isNewUser } = (signedUser._tokenResponse ?? {})
}

export const signout = async () => {
  cloudSignout()
}

export const deleteUser = async () => {
  cloudDeleteUser()
}
