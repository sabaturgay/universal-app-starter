import React from 'react'
import {
  Stack,
  Icon,
  Heading,
  IHeadingProps, IIconProps,
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'

type ActionLinkProps = IHeadingProps & {
  icon?: IIconProps;
}

export const ActionLink = (props: ActionLinkProps) => {
  const { children, icon= {}, ...rest } = props
  return (
    <Stack
      direction="row"
      position="absolute"
      right="9"
      bottom={{ base: '4', sm: '6' }}
      space="2"
      alignItems="center"
    >
      <Heading
        size="sm"
        {...rest}
      >
        {children}
      </Heading>
      <Icon
        as={Ionicons}
        size="sm"
        name="arrow-forward-sharp"
        {...icon}
      />
    </Stack>
  )
}
