# initialWindowMetrics of SafeAreaContext can cause not rendering children -> Use with caution

# \_middleware breaks the Fast Refresh

it has experimental support

# Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined.

possible in somewhere; `window` is used and caused an error. Check trace to find `window` usage and find an alternative way

# js-yaml

js-yaml not working with nextjs -> use yaml

# graphql-ws

graphql-ws not working with nextjs -> ƒind an alternative

# REANIMATED

polyfill requestAnimationFrame

node_modules/react-native-reanimated/lib/reanimated2/js-reanimated/index.web.js
\_updatePropsJS

- Line 14
  - setNativeProps(viewRef.\_component, rawStyles);
    to:
    - setNativeProps(viewRef.current.\_component, rawStyles);

node_modules/react-native-reanimated/lib/reanimated2/Hooks.js
useAnimatedStyle

- Line 332
  - const inputs = Object.values(updater.\_closure);
    to:
    - const inputs = Object.values(updater.\_closure ? updater.\_closure : {});
