import React from 'react'
import {
  Link,
  ILinkProps,
  themeTools,
} from 'native-base'
import merge from 'lodash.merge'

export const NavLink = (props: ILinkProps) => (
  <Link
    {...merge(DEFAULT_PROPS, props)}
  />
)

const DEFAULT_PROPS = {
  px: '2',
  textAlign: 'center',
  borderRadius: 'md',
  _text: { fontWeight: 'bold' },
  _hover: {
    shadow: '2',
    isUnderlined: true,
    borderColor: themeTools.mode('gray.100', 'gray.900'),
    bg: 'gray.100',
  },
}
