import {
  Button, Center, Icon, Text, IButtonProps,
} from 'native-base'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export const GoogleButton = (props: IButtonProps) => {
  const {
    children,
    ...rest
  } = props
  return (
    <Button
      w="full"
      maxW="md"
      variant="outline"
      startIcon={(
        <Icon
          as={Ionicons}
          name="logo-google"
          size={6}
        />
      )}
      {...rest}
    >
      <Center>
        <Text>{children}</Text>
      </Center>
    </Button>
  )
}
