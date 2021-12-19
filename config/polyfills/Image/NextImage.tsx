import React from 'react'
import Image, { ImageProps } from 'next/image'

export type NextImageProps = ImageProps

const PLACEHOLDER = 'blur'
const BLUR_DATA_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='

export const NextImage = React.forwardRef(
  (props: NextImageProps, ref: any) => (
    <Image
      ref={ref}
      blurDataURL={BLUR_DATA_URL}
      placeholder={PLACEHOLDER}
      {...props}
    />
  ),
)
