import React from 'react'
import {
  HeadManagerContext,
} from 'next/dist/shared/lib/head-manager-context'
import initHeadManager from 'next/dist/client/head-manager'
import {
  DefaultSeo,
  DefaultSeoProps,
} from 'next-seo'
import {
  isBrowser,
} from 'colay-ui'

const headManager: {
  mountedInstances: Set<unknown>
  updateHead: (head: JSX.Element[]) => void
  getIsSsr?: () => boolean
} = initHeadManager()

headManager.getIsSsr = () => false
// const h = headManager.updateHead
// headManager.updateHead = (...args) => {
//   h(...args)
// }

export type HeadContextProviderProps = {
  children: any;
  defaultSeo?: DefaultSeoProps
}

export const HeadContextProvider = (props: HeadContextProviderProps) => {
  const {
    children,
    defaultSeo,
  } = props
  React.useMemo(() => {
    if (isBrowser) {
      const sc = document.createElement('meta')
      sc.setAttribute('name', 'next-head-count')
      document.head.appendChild(sc)
    }
  }, [])
  return isBrowser
    ? (
      <>
        <HeadManagerContext.Provider value={headManager}>
          <DefaultSeo {...defaultSeo} />
          {children}
        </HeadManagerContext.Provider>
      </>
    )
    : children
}
