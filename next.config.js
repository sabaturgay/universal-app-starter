const withPlugins = require('next-compose-plugins')
const { withExpo } = require('@expo/next-adapter')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withTM = require('next-transpile-modules')([
  // 'react-native-svg',
  'react-native-render-html',
  'moti',
  '@motify/core',
  '@motify/components',
  'colay',
  'colay-ui',
]) // pass the modules you would like to see transpiled

const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    transpileOnly: true
  },
  images: {
    disableStaticImages: true,
      domains: [
        'images.unsplash.com',
        "media-exp1.licdn.com",
        'cdn.filestackcontent.com',
        "process.filestackapi.com",
        "media.giphy.com",
        "images.pexels.com",
      ],
  }
}

module.exports = withPlugins(
  [
    withTM,
    withImages,
    withFonts,
    [withExpo, { projectRoot: __dirname }],
  ],
  nextConfig,
)
