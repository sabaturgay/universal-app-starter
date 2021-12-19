import { Dimensions } from 'react-native'
import { canUseDOM } from 'colay-ui'

export const InitialDimensions = {
  window: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0,
  },
  screen: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0,
  },
}

const DeviceDimensions = {
  mobile: {
    window: {
      fontScale: 1,
      height: 640,
      scale: 1,
      width: 360,
    },
    screen: {
      fontScale: 1,
      height: 640,
      scale: 1,
      width: 360,
    },
  },
  tablet: {
    window: {
      fontScale: 1,
      height: 1024,
      scale: 1,
      width: 768,
    },
    screen: {
      fontScale: 1,
      height: 1024,
      scale: 1,
      width: 768,
    },
  },
  desktop: {
    window: {
      fontScale: 1,
      height: 768,
      scale: 1,
      width: 1024,
    },
    screen: {
      fontScale: 1,
      height: 768,
      scale: 1,
      width: 1024,
    },
  },
}

export const setInitialDimensions = (deviceType: 'mobile' | 'tablet' | 'desktop') => {
  const newDimensions = DeviceDimensions[deviceType]
  if (!newDimensions) {
    throw Error('Unsupported device type for Dimensions')
  }
  InitialDimensions.window = newDimensions.window
  InitialDimensions.screen = newDimensions.screen
}

if (!canUseDOM()) {
  Dimensions.get = (dimension) => {
    const value = InitialDimensions[dimension]
    if (!value) {
      throw Error(`No dimension set for key ${dimension}`)
    }
    return value
  }
}
