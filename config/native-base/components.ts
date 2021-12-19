import { isBrowser } from 'colay-ui'
import { themeTools } from 'native-base'

export const components = {
  List: { baseStyle: () => ({ borderWidth: 0 }) },
  Link: {
    defaultProps: { isUnderlined: false },
    baseStyle: (props) => ({ alignItems: 'center' }),
  },
  SimpleGrid: { baseStyle: () => ({}) },
  Button: {
    baseStyle: () => ({
      borderRadius: 'md',
      style: {
        ...(
          isBrowser
            ? { userSelect: 'none' }
            : {}
        ),
      },
    }),
  },
  Image: {
    defaultProps: {
      thumbnailSource: { uri: 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' },
    },
    baseStyle: () => ({ }),
  },
  Icon: {
    defaultProps: { size: 'sm' },
    baseStyle: () => ({ }),
  },
  IconButton: {
    defaultProps: { size: 'sm' },
    baseStyle: () => ({
      borderRadius: 'md',
      style: {
        ...(
          isBrowser
            ? { userSelect: 'none' }
            : {}
        ),
      },
    }),
  },
  Input: { baseStyle: () => ({ borderRadius: 'md' }) },
  // ListItem: {
  //   baseStyle: () => ({
  //     _hover: {
  //       bg: 'white',
  //     },
  //   }),
  // },
}
