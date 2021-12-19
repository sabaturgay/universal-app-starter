import React from 'react'
import HeadNative from 'next/head'
import {
  isBrowser,
} from 'colay-ui'

export type HeadProps = React.ComponentProps<typeof HeadNative>

export const Head = (props: HeadProps) => (isBrowser ? (
  <HeadNative {...props} />
) : null)

export default Head
