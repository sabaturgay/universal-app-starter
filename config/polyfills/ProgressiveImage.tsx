import Box from 'native-base/lib/commonjs/components/primitives/Box'
import React from 'react'
import { Animated, StyleSheet } from 'react-native'

type IImageProps = { }

const NBImage = require('native-base/lib/commonjs/components/primitives/Image').default

const NBAnimatedImage = Animated.createAnimatedComponent(NBImage)

const Image = (props: IImageProps, ref: any) => {
  const {
    thumbnailSource,
    ...rest
  } = props
  console.log('Image props: ', props)
  const thumbnailAnimated = React.useMemo(() => new Animated.Value(0), [])
  const imageAnimated = React.useMemo(() => new Animated.Value(0), [])

  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, { toValue: 1 }).start()
  }

  const onImageLoad = () => {
    // Animated.timing(imageAnimated, { toValue: 1 }).start()
  }

  return (
    <Box
      {...rest}
    >
      <NBAnimatedImage
        {...props}
        boxSize="full"
        position="absolute"
        source={thumbnailSource}
        style={[{ opacity: thumbnailAnimated }]}
        onLoad={handleThumbnailLoad}
        blurRadius={1}
      />
      <NBAnimatedImage
        {...rest}
        boxSize="full"
        position="absolute"
        ref={ref}
        style={[{ opacity: imageAnimated }]}
        onLoad={onImageLoad}
      />
    </Box>
  )
}
const ImageComponent = React.memo(React.forwardRef(Image))
export default ImageComponent
export type { IImageProps }

require('native-base/lib/commonjs/components/primitives/Image').default = ImageComponent
