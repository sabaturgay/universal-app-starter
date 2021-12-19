import AsyncStorage from '@react-native-async-storage/async-storage'
import { components } from './components'
// import { colors } from './colors'
// import { shadows } from './shadows'

import {
  ColorMode,
  INativebaseConfig,
  StorageManager,
  extendTheme,
} from 'native-base'
// import foundation from './foundations'

export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      const val = await AsyncStorage.getItem('@color-mode')
      return val === 'dark' ? 'dark' : 'light' // 'dark'
    } catch (e) {
      console.log(e, 'get color mode')
      return 'light'
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem('@color-mode', value!)
    } catch (e) {
      console.log(e)
    }
  },
}

export const createNativeBaseConfig = (colorMode: 'dark' | 'light' = 'light'): INativebaseConfig => ({
  dependencies: { 'linear-gradient': require('expo-linear-gradient').LinearGradient },
  strictMode: 'off', // 'strict'
  theme: extendTheme({
    config: {
      initialColorMode: colorMode,
      // useSystemColorMode: true,
    },
    components,
    // colors,
    // letterSpacings: {
    //   tighter: -1.5,
    //   tight: -0.5,
    //   normal: '0',
    //   wide: 0.25,
    //   wider: 0.5,
    //   widest: 1.25,
    // },
    // lineHeights: {
    //   normal: 1.5,
    //   none: 1,
    //   shorter: 1.25,
    //   short: 1.375,
    //   base: 1.5,
    //   tall: 1.625,
    //   taller: '2',
    //   3: '.75rem',
    //   4: '1rem',
    //   5: '1.25rem',
    //   6: '1.5rem',
    //   7: '1.75rem',
    //   8: '2rem',
    //   9: '2.25rem',
    //   10: '2.5rem',
    // },
    // sizes: {
    //   max: 'max-content',
    //   min: 'min-content',
    //   full: '100%',
    //   '3xs': 224,
    //   '2xs': 256,
    //   xs: 320,
    //   sm: 384,
    //   md: 448,
    //   lg: 512,
    //   xl: 576,
    //   '2xl': 672,
    //   '3xl': 768,
    //   '4xl': 896,
    //   '5xl': 1024,
    //   '6xl': 1152,
    //   '7xl': 1280,
    //   '8xl': 1440,
    //   '11/12': '91.66%',
    // },
    // zIndices: {
    //   hide: -1,
    //   auto: 'auto',
    //   base: 0,
    //   docked: 10,
    //   dropdown: 1000,
    //   sticky: 1100,
    //   banner: 1200,
    //   overlay: 1300,
    //   modal: 1400,
    //   popover: 1500,
    //   skipLink: 1600,
    //   toast: 1700,
    //   tooltip: 1800,
    // },
    // radii: {
    //   none: 0,
    //   sm: 2,
    //   base: 4,
    //   md: 6,
    //   lg: 8,
    //   xl: 12,
    //   '2xl': 16,
    //   '3xl': 24,
    //   full: 9999,
    // },
    // shadows,
  }),
}
)
