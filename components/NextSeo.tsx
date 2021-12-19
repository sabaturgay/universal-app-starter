import React from 'react'
import {
  NextSeo as NextSeoNative,
  NextSeoProps as NextSeoPropsNative,
} from 'next-seo'
import {
  isBrowser,
} from 'colay-ui'

export type NextSeoProps = NextSeoPropsNative

export const NextSeo = (props: NextSeoProps) => {
  const [isReady, setIsReady] = React.useState(false)
  React.useMemo(() => {
    setTimeout(() => setIsReady(true), 0)
  }, [])
  // const [_, update] = React.useState(0)
  // React.useEffect(() => {
  //   const onVisibilityChange = () => {
  //     setTimeout(() => {
  //       update((val) => val + 1)
  //     }, 10)
  //   }
  //   document.addEventListener('visibilitychange', onVisibilityChange)
  //   return () => {
  //     document.removeEventListener('visibilitychange', onVisibilityChange)
  //   }
  // }, [])
  return (isBrowser && isReady) ? (
    <NextSeoNative {...props} />
  ) : null
}
