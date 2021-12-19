import { IImageProps } from 'native-base'
import React, { forwardRef, memo } from 'react'

const NBImage = require('native-base/lib/commonjs/components/primitives/Image').default

const Image = (props: IImageProps, ref: any) => {
  const {
    source,
    src,
    ...rest
  } = props
  console.log('Image props: ', props)
  return (
    <NBImage
      ref={ref}
      {...rest}
      // fallbackElement={<div>TS</div>}
    />
  )
}
const ImageComponent = memo(forwardRef(Image))
export default ImageComponent
export type { IImageProps }

require('native-base/lib/commonjs/components/primitives/Image').default = ImageComponent
