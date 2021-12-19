import React from 'react'
import { ScrollView, IScrollViewProps } from 'native-base'
import {
  useForwardRef,
  wrapComponent,
  useLayout,
} from 'colay-ui'

export type PagerProps = {
  currentIndex: number;
} & IScrollViewProps

const PagerElement = (props: any, forwardedRef: any) => {
  const { currentIndex = 0, ...rest } = props
  const ref = useForwardRef(forwardedRef)
  const {
    width,
    onLayout,
  } = useLayout()
  React.useEffect(() => {
    const scrollView = ref.current
    scrollView.scrollTo({ x: currentIndex * width })
  }, [currentIndex])
  return (
    <ScrollView
      ref={ref}
      {...rest}
      scrollEnabled={false}
      onLayout={onLayout}
      pagingEnabled
      snapToEnd
    />
  )
}

export const Pager = wrapComponent(
  PagerElement,
  { isForwardRef: true },
)
