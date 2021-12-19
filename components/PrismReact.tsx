import React from 'react'
import { ViewStyle } from 'react-native'
import { isBrowser, View } from 'colay-ui'
import { WebView } from 'react-native-webview'
import { Head } from '@components/Head'

export type PrismReactProps = {
  language: string;
  code: string;
  themeLink: string;
  style?:ViewStyle
}

export const PrismReact = (props: PrismReactProps) => {
  const {
    language,
    code,
    themeLink = 'https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-vsc-dark-plus.min.css',
    style,
  } = props
  return (
    isBrowser
      ? (
        <View>
          <Head>
            <link
              href={themeLink}
              rel="stylesheet"
            />
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/line-numbers/prism-line-numbers.min.css"
              rel="stylesheet"
            />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/components/prism-core.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/plugins/autoloader/prism-autoloader.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/line-numbers/prism-line-numbers.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js" />
          </Head>
          <View dangerouslySetInnerHTML={{
            __html: `
          <pre class="line-numbers">
            <code class="language-${language}">${code}</code>
          </pre>`,
          }}
          />
        </View>
      )
      : (
        <WebView
          style={style}
          originWhitelist={['*']}
          source={{
            html: `
<!DOCTYPE html>
<html>
  <head>
  <link
    href="${themeLink}"
    rel="stylesheet"
  />
  <link
     href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/line-numbers/prism-line-numbers.min.css"
     rel="stylesheet"
   />
  </head>
  <body style="font-size: 50px" class="line-numbers">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/components/prism-core.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/plugins/autoloader/prism-autoloader.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/line-numbers/prism-line-numbers.min.js" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js" />
    <pre>
      <code class="language-${language}">${code}</code>
    </pre>
  </body>
</html>`,
          }}
        />
      )
  )
}
