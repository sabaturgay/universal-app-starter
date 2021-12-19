import React from 'react'
import { Viewport } from './index'

// onEnterViewport={() => {
//   props.onEnterViewport?.()
//   setIsIntersecting(true)
// }}
// onExitViewport={() => {
//   props.onExitViewport?.()
//   if (config.loop) {
//     setIsIntersecting(false)
//   }
// }}
export const WithPlaceholder = (Component, Placeholder, config) => {
  const WrappedComponent = React.forwardRef((props: any, forwardedRef) => {
    const isIntersecting = React.useRef(false)
    if (!isIntersecting.current) {
      isIntersecting.current = props.inViewport
    }
    const {
      children,
      ...rest
    } = props
    return (
      isIntersecting.current ? (
        <Component
          ref={forwardedRef}
          {...props}
        />
      ) : (
        <Placeholder
          ref={forwardedRef}
          {...rest}
        />
      )
    )
  })
  const AwareComponent = Viewport.Aware(WrappedComponent)
  return AwareComponent
}
