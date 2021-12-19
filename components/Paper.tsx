import { Stack } from 'native-base'
import { COLORS } from '@constants'
import React from 'react'

export type PaperProps = React.ComponentPropsWithRef<typeof Stack>

export const Paper = (props: PaperProps) => {
  const {
    children,
    _light = {},
    _dark = {},
    ...rest
  } = props
  return (
    <Stack
      _light={{
        backgroundColor: COLORS.background.light,
        ..._light,
      }}
      _dark={{
        backgroundColor: COLORS.background.dark,
        ..._dark,
      }}
      {...rest}
    >
      {children}
    </Stack>
  )
}
