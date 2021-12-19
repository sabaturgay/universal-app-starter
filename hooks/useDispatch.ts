import React from 'react'
import { useImmer } from 'colay-ui/hooks/useImmer'
import { Logger, Updater, UpdateState } from 'colay-ui/hooks/useImmer/type'

export type { Logger, Updater, UpdateState } from 'colay-ui/hooks/useImmer/type'

type Options<T> = {
  logger?: Logger<T>;
  deps?: any[];
  map?: any
}

type UpdaterConfig = {
  silent?: boolean;
}

type Action = {
  type: string;
  payload?: any
}

type OnDispatch<T, UR> = (
  action: Action,
  update: UpdateState<Updater<T, UR>>
) => void | Promise<void>
type Dispatch = (action: Action | string, payload?: any) => void

export const useDispatch = <T, UR extends any | UpdaterConfig | undefined >(
  initialValue: T,
  onDispatch: OnDispatch<T, UR>,
  options: Options<T> = {},
) => {
  const {
    deps = [],
    map,
  } = options
  const [_, update, ref] = useImmer(initialValue, options)
  const dispatchCallback = React.useCallback((typeOrAction, value) => {
    const action = typeof typeOrAction === 'string'
      ? {
        type: typeOrAction,
        payload: value,
      }
      : typeOrAction
    onDispatch(action, update)
  }, deps) as Dispatch
  const mapValues = Object.values(map ?? {})
  React.useMemo(() => {
    if (map) {
      update((draft) => {
        Object.keys(map).map((key) => {
          draft[key] = map[key]
        })
        return {
          silent: true,
        }
      })
    }
  }, mapValues)
  return [ref.value, dispatchCallback, ref] as const
}
