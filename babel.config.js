const IS_NEXT = process.env.npm_lifecycle_script.includes('next ')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: IS_NEXT 
      ? ['@expo/next-adapter/babel']
      :['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      ["@babel/plugin-proposal-private-methods", { "loose": true }],
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.es',
            '.es6',
            '.mjs',
            '.ts',
            '.tsx',
          ],
          alias: {
            '@assets': './assets',
            '@lib': './lib',
            '@components': './components',
            '@hooks': './hooks',
            '@utils': './utils',
            '@root': './',
            '@core': './core',
            '@config': './config',
            '@constants': './constants',
            '@screens': './screens',
            '@cloud': './cloud',
            '@store': './store',
            '@type': './type',
            '@providers': './providers',
            '@react-native-community/netinfo': './config/polyfills/NetInfo'
          },
        },
      ],
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-proposal-optional-chaining",
    ],
  }
}
