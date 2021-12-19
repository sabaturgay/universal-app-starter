import { Platform } from 'react-native'
import cookie from 'cookie'
import yaml from 'yaml'
import * as R from 'colay/ramda'

export const parseCookies = (req) => cookie.parse(
  req?.headers?.cookie ?? '',
  // req ? req.headers.cookie || '' : document.cookie,
)

const TRANSFORM_KEYS = [
  'matrix',
  'perspective',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scaleX',
  'scaleY',
  'translateX',
  'translateY',
  'skewX',
  'skewY',
]
export const convertTransform = (style: Record<string, any>) => {
  const transform = []
  const newStyle = { transform }
  Object.keys(style).map((key) => {
    const value = style[key]
    if (TRANSFORM_KEYS.includes(key)) {
      transform.push({ [key]: value })
    } else {
      newStyle[key] = value
    }
  })

  return newStyle
}

export const IS_DEV = __DEV__

export const isServer = () => typeof window === 'undefined' && Platform.OS === 'web'

export const isWeb = () => Platform.OS === 'web'

export const processMarkdown = (data: string) => {
  const result = R.regex(/---\n((.*\n)*)---/gm)(data)
  if (result[0]) {
    const info = yaml.parse(result[0].groups[0], {})
    return {
      info,
      markdown: data.replace(result[0].match, ''),
    }
  }
  return { markdown: data }
}

