import * as functions from 'firebase-functions'

export const params: Record<string, any> = {}

const { env } = functions.config()

Object.keys(env).map((key) => {
  try {
    params[key] = JSON.parse(env[key])
  } catch (error) {
    params[key] = env[key]
  }
})
