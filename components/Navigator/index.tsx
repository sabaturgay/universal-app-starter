import React from 'react'
import * as R from 'colay/ramda'
import { wrapComponent } from 'colay-ui'
import {
  createStackNavigator,
  StackScreenProps as StackScreenPropsNative,
  StackNavigationProp,
} from '@react-navigation/stack'
import {
  createBottomTabNavigator,
  BottomTabScreenProps as BottomTabScreenPropsNative,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import {
  useNavigationState as useNavigationStateNative,
  Route, NavigationProp, createNavigationContainerRef,
} from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()
// eslint-disable-next-line @typescript-eslint/comma-dangle
export const useNavigationState = <T, >(
  selector: (s: any) => T = R.identity,
): T => useNavigationStateNative(selector)

export type StackNavigatorProps = React.ComponentProps<
ReturnType<
    typeof createStackNavigator
>['Navigator']
>
export type TabNavigatorProps = React.ComponentProps<
ReturnType<
    typeof createBottomTabNavigator
>['Navigator']
>
export type StackNavigatorScreenProps = React.ComponentProps<
ReturnType<
    typeof createStackNavigator
>['Screen']
>
export type TabNavigatorScreenProps = React.ComponentProps<
ReturnType<
    typeof createBottomTabNavigator
>['Screen']
>

export type TabScreenProps<
P extends Record<string, any> = Record<string, any>,
> = BottomTabScreenPropsNative<any> & {
  getRootNavigationAndRoute: (navigation: BottomTabNavigationProp<any>) => {
    rootNavigation: BottomTabNavigationProp<any>
    route: Route<string, P>
  }
}

export type StackScreenProps<
P extends Record<string, any> = Record<string, any>,
> = StackScreenPropsNative<any> & {
  getRootNavigationAndRoute: (navigation: StackNavigationProp<any>) => {
    rootNavigation: BottomTabNavigationProp<any>
    route: Route<string, P>
  }
}

type NavigatorType = ReturnType<typeof createBottomTabNavigator>

const NavigatorContext = React.createContext({
  Navigator: null as unknown as NavigatorType,
})

const createNavigator = (
  creator: (typeof createBottomTabNavigator),
) => (props: TabNavigatorProps | StackNavigatorProps) => {
  const {
    children,
    tabBar = () => null,
    screenOptions,
    ...rest
  } = props
  const Navigator = React.useMemo(() => creator(), [])
  const screenChildren = React.Children.map(
    // @ts-ignore
    children,
    (child: React.ReactElement) => {
      const { component: defaultComponent, ...restChildProps } = child.props
      const component = React.useCallback(
        (screenProps) => defaultComponent({
          ...screenProps,
          ...(getRootNavigationAndRoute(screenProps.navigation) ?? {}),
          navigationRef,
        }),
        [],
      )
      return (
        <Navigator.Screen
          {...restChildProps}
          component={component}
        />
      )
    },
  )
  return (
    <NavigatorContext.Provider
      value={{ Navigator }}
    >
      <Navigator.Navigator
        {...rest}
        screenOptions={(props) => {
          const defaultOptions = createStackNavigator === creator ? {
            headerShown: false,
          } : { headerStyle: { height: 0.3 } }

          if (!screenOptions) {
            return defaultOptions
          }
          const resolvedOptions = typeof screenOptions === 'function'
            ? screenOptions(props)
            : screenOptions
          return {
            ...defaultOptions,
            ...resolvedOptions,
          }
        }}
        tabBar={tabBar}
      >
        {screenChildren}
      </Navigator.Navigator>
    </NavigatorContext.Provider>
  )
}

export const TabNavigator = wrapComponent<TabNavigatorProps>(
  // @ts-ignore
  createNavigator(createBottomTabNavigator),
) as React.FC<TabNavigatorProps> & {
  Screen: typeof TabNavigatorScreen
}

export const StackNavigator = wrapComponent<StackNavigatorProps>(
  // @ts-ignore
  createNavigator(createStackNavigator),
) as React.FC<StackNavigatorProps> & {
  Screen: typeof StackNavigatorScreen
}

export const NavigatorScreenElement = (
  props: TabNavigatorScreenProps | StackNavigatorScreenProps,
) => (
  null
)

const TabNavigatorScreen = wrapComponent<TabNavigatorScreenProps>(
  NavigatorScreenElement,
)

const StackNavigatorScreen = wrapComponent<StackNavigatorScreenProps>(
  NavigatorScreenElement,
)

StackNavigator.Screen = StackNavigatorScreen
TabNavigator.Screen = TabNavigatorScreen

export {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native'

export const getRootParent = (navigation: NavigationProp<any>): NavigationProp<any> => {
  const parent = navigation.getParent()
  if (parent) {
    return getRootParent(parent)
  }
  return navigation
}

export const getAllRoutes = (
  navigation: NavigationProp<any>,
  routes: Route<string>[] = [],
): Route<string>[] => {
  const parent = navigation.getParent()
  routes = routes.concat(navigation.getState().routes)
  if (parent) {
    return getAllRoutes(parent, routes)
  }
  return routes
}

export const getRootNavigationAndRoute = (navigation: NavigationProp<any>) => {
  const allRoutes = getAllRoutes(navigation)
  const { history, type, routes } = navigation.getState()
  const currentRoute = R.last(type === 'tab' ? history : routes)
  const initialRoute = allRoutes.find(
    (route) => route.key === currentRoute.key,
  )
  return {
    rootNavigation: navigation,
    route: initialRoute!,
  }
}

// export const getRootNavigationAndRoute = (navigation: NavigationProp<any>) => {
//   const rootParent = getRootParent(navigation)
//   const allRoutes = getAllRoutes(navigation)
//   const { routes } = rootParent.getState()
//   const currentRoute = R.last(routes)
//   const initialRoute = allRoutes.find(
//     (route) => route.key === currentRoute.key,
//   )
//   console.log('A',allRoutes, routes, navigation.getState())
//   return {
//     rootNavigation: navigation,
//     route: initialRoute!,
//   }
// }
