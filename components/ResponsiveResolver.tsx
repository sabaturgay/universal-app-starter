import React from 'react'
import {
  useBreakpointValue,
} from 'native-base'

type Resolver = () => React.ReactElement
export type ResponsiveResolverProps = {
  query: {
    base?: Resolver;
    sm?: Resolver;
    md?: Resolver;
    lg?: Resolver;
  }
} & Record<string, any>

export const ResponsiveResolver = (props: ResponsiveResolverProps) => {
  const {
    query,
    ...rest
  } = props
  const ScreenModule = useBreakpointValue(query)()
  const Screen = React.useMemo(() => getScreenFromModule(ScreenModule), [ScreenModule])

  return <Screen {...rest} />
}

const getScreenFromModule = (module: any) => Object.values(module)[0]
