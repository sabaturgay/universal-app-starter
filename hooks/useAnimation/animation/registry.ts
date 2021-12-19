// import { AnimationDefinition } from '@type'
import * as R from 'colay/ramda'

const animationRegistry: Record<string, AnimationDefinition> = {}

export function registerAnimation(animationName: string, definition: AnimationDefinition) {
  // eslint-disable-next-line functional/immutable-data
  animationRegistry[animationName] = definition
}

export function getAnimationConfigByName(animationName = '') {
  return animationRegistry[animationName]
}

export function getAnimationNames() {
  return Object.keys(animationRegistry)
}

export const initializeRegistryWithDefinitions = (
  definitions: Record<string, AnimationDefinition>,
) => R.forEachObjIndexed(
  (def: AnimationDefinition, name: string) => registerAnimation(
    name,
    def,
  ),
  definitions,
)
