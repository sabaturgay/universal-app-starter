import * as R from 'colay/ramda'
import * as ANIMATION_DEFINITIONS from './definitions'
import { initializeRegistryWithDefinitions, getAnimationConfigByName } from './registry'
// eslint-disable-next-line functional/no-expression-statement
initializeRegistryWithDefinitions(
  ANIMATION_DEFINITIONS,
)

// export { createUseAnimation } from './createUseAnimation'
export {
  EASING_FUNCTIONS,
} from './easing'

export {
  getAnimationConfigByName as getAnimationByName,
  initializeRegistryWithDefinitions, registerAnimation,
} from './registry'

export const getAnimation = (
  name: string,
) => {
  const {
    ...timeBasedSituationsUnsorted
  } = getAnimationConfigByName(name)
  const timeBasedSituations = Object.keys(timeBasedSituationsUnsorted).sort().map(
    (key) => timeBasedSituationsUnsorted[key],
  )
  return {
    from: timeBasedSituations[0],
    to: R.drop(1, timeBasedSituations),
  }
}
