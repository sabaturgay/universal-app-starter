import React from 'react'
import {
  Button, Center, Icon, Text, IButtonProps,
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'

export const GithubButton = (props: IButtonProps) => {
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
          name="logo-github"
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
