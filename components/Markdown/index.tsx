import React from 'react'
import RenderHtml, { MixedStyleRecord } from 'react-native-render-html'
import showdown from 'showdown'
import * as R from 'colay/ramda'
import { Box, IBoxProps } from 'native-base'
import { useLayout } from 'colay-ui'
import { renderers } from './renderers'

export type MarkdownProps = Omit<
React.ComponentProps<typeof RenderHtml>,
'html' | 'uri' | 'source'
> & {
  children: string;
} & IBoxProps

const converter = new showdown.Converter()

export const Markdown = (props: MarkdownProps) => {
  const {
    children,
    defaultTextProps = {},
    ...rest
  } = props
  const html = React.useMemo(
    () => converter.makeHtml(children),
    [children],
  )
  const renderHtmlProps = R.pick(RENDER_HTML_PROPS_NAMES, rest)
  const boxProps = R.omit(RENDER_HTML_PROPS_NAMES, rest)
  const {
    onLayout,
    width,
  } = useLayout()
  return (
    <Box
      {...boxProps}
      onLayout={onLayout}
    >
      <RenderHtml
        source={{ html }}
        defaultTextProps={{
          ...defaultTextProps,
          ...DEFAULT_TEXT_PROPS,
        }}
        contentWidth={width}
        renderers={renderers}
        classesStyles={classesStyles}
        tagsStyles={tagStyles}
        baseStyle={{
          marginTop: 2,
          marginBottom: 2,
        }}
        {...renderHtmlProps}
      />
    </Box>
  )
}

const classesStyles: MixedStyleRecord = {
  // ... other classes styles
  // 'prism-code': {
  //   backgroundColor: '#282c34',
  //   fontFamily: 'monospace',
  //   borderRadius: 10,
  //   fontSize: 14,
  //   lineHeight: 14 * 1.6,
  //   flexShrink: 0,
  // },
}
const baseStyle = {
  marginTop: 2,
  marginBottom: 2,
}
const tagStyles: MixedStyleRecord = {
  p: {
    ...baseStyle,
  },
  ul: {
    ...baseStyle,
  },
  ol: {
    ...baseStyle,
  },
  a: {
    color: 'green',
    fontSize: 30,
  },
}

const DEFAULT_TEXT_PROPS = {
  selectable: true,
}

const RENDER_HTML_PROPS_NAMES = [
  'GenericPressable',
  'WebView',
  'allowedStyles',
  'baseStyle',
  'bypassAnonymousTPhrasingNodes',
  'classesStyles',
  'computeEmbeddedMaxWidth',
  'contentWidth',
  'customHTMLElementModels',
  'customListStyleSpecs',
  'dangerouslyDisableHoisting',
  'dangerouslyDisableWhitespaceCollapsing',
  'debug',
  'defaultTextProps',
  'defaultViewProps',
  'defaultWebViewProps',
  'domVisitors',
  'emSize',
  'enableCSSInlineProcessing',
  'enableExperimentalBRCollapsing',
  'enableExperimentalGhostLinesPrevention',
  'enableExperimentalMarginCollapsing',
  'enableUserAgentStyles',
  'fallbackFonts',
  'htmlParserOptions',
  'idsStyles',
  'ignoreDomNode',
  'ignoredDomTags',
  'ignoredStyles',
  'onDocumentMetadataLoaded',
  'onHTMLLoaded',
  'onTTreeChange',
  'pressableHightlightColor',
  'provideEmbeddedHeaders',
  'remoteErrorView',
  'remoteLoadingView',
  'renderers',
  'renderersProps',
  'selectDomRoot',
  'setMarkersForTNode',
  'source',
  'systemFonts',
  'tagsStyles',
]
