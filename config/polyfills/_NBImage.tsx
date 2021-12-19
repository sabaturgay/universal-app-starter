import NextImage from 'next/image'
import React, {
  useState,
  memo,
  forwardRef,
  useCallback,
  useRef,
} from 'react'
// import { Image as RNImage } from 'react-native';
import Text from 'native-base/lib/commonjs/components/primitives/Text'
import { usePropsResolution } from 'native-base/lib/commonjs/hooks/useThemeProps'
import type { IImageProps } from 'native-base/lib/commonjs/types'
import { useHasResponsiveProps } from 'native-base/lib/commonjs/hooks/useHasResponsiveProps'
import { makeStyledComponent } from 'native-base/lib/commonjs/utils/styled'
import { StyleSheet } from 'react-native'

const StyledImage = makeStyledComponent((props) => (
  <NextImage
    {...props}
    {...StyleSheet.flatten(props.style)}
  />
))

const Image = (props: IImageProps, ref: any) => {
  const {
    source,
    src,
    fallbackElement,
    alt,
    fallbackSource,
    ignoreFallback,
    _alt,
    ...resolvedProps
  } = usePropsResolution('Image', props)

  const finalSource: any = useRef(null)
  const getSource = useCallback(() => {
    if (source) {
      finalSource.current = source
    } else if (src) {
      finalSource.current = { uri: src }
    }
    return finalSource.current
  }, [source, src])

  const [renderedSource, setSource] = useState(getSource())
  const [alternate, setAlternate] = useState(false)
  const [fallbackSourceFlag, setfallbackSourceFlag] = useState(true)

  React.useEffect(() => () => {
    finalSource.current = null
  }, [source, src, getSource])

  const onImageLoadError = useCallback(
    (event: any) => {
      props.onError && props.onError(event)
      console.warn(event.nativeEvent.error)
      if (
        !ignoreFallback
        && fallbackSource
        && fallbackSource !== renderedSource
        && fallbackSourceFlag
      ) {
        setfallbackSourceFlag(false)
        setSource(fallbackSource)
      } else {
        setAlternate(true)
      }
    },
    [fallbackSource, fallbackSourceFlag, ignoreFallback, props, renderedSource],
  )
  // TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null
  }
  if (!alt) {
    console.warn('Please pass alt prop to Image component')
  }

  if (alternate) {
    if (fallbackElement) {
      if (React.isValidElement(fallbackElement)) {
        return fallbackElement
      }
    } else return <Text {..._alt}>{alt}</Text>
  }
  return (
    <StyledImage
      // source={renderedSource}
      src={renderedSource.uri ? renderedSource.uri : renderedSource}
      accessibilityLabel={alt}
      alt={alt}
      {...resolvedProps}
      onError={onImageLoadError}
      ref={ref}
    />
  )
}

const ImageComponent = memo(forwardRef(Image))
export default ImageComponent
export type { IImageProps }

require('native-base/lib/commonjs/components/primitives/Image').default = ImageComponent
