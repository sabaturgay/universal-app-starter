import React from 'react'
import { useAnimation, animated } from '@hooks/useAnimation'
import { Text, Button } from 'colay-native-base'

const AnimatedButton = animated(Button)

export const A = () => {
  const [style, api] = useAnimation({
    name: 'jello',
    autoStart: false,
    config: {
      duration: 200,
    },
  })
  return (
    <>

      <Text>
        LG
      </Text>
      <AnimatedButton
        style={style}
        onPress={() => {
          api.restart()
        }}
      >
        Heyyasd
      </AnimatedButton>
    </>
  )
}
