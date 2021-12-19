// Import the functions you need from the SDKs you need
import { getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'
import { getStorage } from 'firebase/storage'

// Initialize Firebase
export const app = getApp()

export const auth = getAuth(app)
export const functions = getFunctions(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)

export * from './auth'
