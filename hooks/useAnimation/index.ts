import React from 'react'
import {
  useSpring,
  SpringValues,
  UseSpringProps, SpringRef,
} from '@react-spring/native'
import { convertTransform } from '@utils'

import { getAnimation } from './animation'
import * as ANIMATION_DEFINITIONS from './animation/definitions'

export type AnimationDefinition = {
  from: Record<string, any>;
  to: Record<string, any>;
}

type ObjectType = Record<string, any>
export type AnimationProps<Props extends ObjectType> = Omit<UseSpringProps<Props>, 'ref'> & {
  autoStart?: boolean;
}

export type AnimationResult<Props extends ObjectType> = [
  SpringValues<Props>,
  SpringRef<Props> & {
    restart: () => void
  },
]

export type Animation<
Props extends ObjectType = ObjectType,
> = React.Ref<React.FC<UseSpringProps<Props>>>

export type UseAnimationFunction = <Props extends ObjectType>(
  config: AnimationProps<Props>,
  deps: any[]
) => AnimationResult<Props>

export const useAnimation = <Props extends object>(
  config?: (AnimationProps<Props> & { name?: keyof typeof ANIMATION_DEFINITIONS }),
  deps: any[] = [],
): AnimationResult<Props> => {
  const animation = React.useMemo(() => (getAnimation(
    config?.name,
  ) ?? {}), [config?.name])
  const [props, api] = useSpring(
    () => ({
      ...animation,
      ...config,
    }),
    deps,
  )
  React.useEffect(() => {
    api.restart = () => {
      api.stop()
      api.update({
        to: animation.to ?? props.to,
      })
      api.start()
    }
  }, [api])
  React.useEffect(() => {
    if (config?.autoStart === false) {
      api.stop()
    }
  }, [config?.autoStart])
  const newProps = React.useMemo(() => convertTransform(props), [props])
  // @ts-ignore
  return [
    newProps,
    api,
  ]
}

export { animated } from '@react-spring/native'

export {
  getAnimation,
  EASING_FUNCTIONS,
} from './animation'
