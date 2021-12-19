import React from 'react'
import { TChildrenRenderer, TNode } from 'react-native-render-html'
import {
  Text, Heading, Link, List,
  ScrollView, useColorModeValue,
  Icon, View,
} from 'native-base'
import { Entypo } from '@expo/vector-icons'
import { PrismReact } from '@components/PrismReact'

export const renderers = {
  p: (props) => {
    const {
      tnode,
      // style,
      ...rest
    } = props
    return (
      <Text
        {...rest}
        // style={[style, { marginBottom: 5, marginTop: 5 }]}
      >
        <TChildrenRenderer tchildren={tnode.children} />
      </Text>
    )
  },
  a: (props) => {
    const {
      tnode,
      ...rest
    } = props
    return (
      <Link href={tnode.attributes.href} {...rest}>
        {tnode.data}
      </Link>
    )
  },
  // span: ({
  //   TDefaultRenderer,
  //   ...props
  // }) => {
  //   if (props.tnode.hasClass('token-line') && !tnodeEndsWithNewLine(props.tnode)) {
  //     return (
  //       <TDefaultRenderer {...props}>
  //         <TChildrenRenderer tchildren={props.tnode.children} />
  //         {'\n'}
  //       </TDefaultRenderer>
  //     )
  //   }
  //   return <TDefaultRenderer {...props} />
  // },
  // pre: ({
  //   TDefaultRenderer,
  //   tnode,
  //   ...props
  // }) => (
  //   <ScrollView
  //     horizontal
  //     style={props.style}
  //   >
  //     <TDefaultRenderer
  //       {...props}
  //       tnode={tnode}
  //       style={{ flexGrow: 1, flexShrink: 1, padding: 10 }}
  //     />
  //   </ScrollView>
  // ), // return <TDefaultRenderer {...props} />

  code: (props) => {
    const {
      tnode,
      ...rest
    } = props
    const themeLink = useColorModeValue(
      'https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-material-light.min.css',
      'https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-material-dark.min.css',
    )
    if (tnode.classes[0]) {
      return (
        <PrismReact
          language={tnode.classes[0]}
          code={tnode.data}
          themeLink={themeLink}
          {...rest}
        />
      )
    }
    return (
      <Text {...rest}>
        {tnode.data}
      </Text>
    )
  },
  ul: (props) => {
    const {
      tnode,
      ...rest
    } = props
    return (
      <List.Unordered
        {...rest}
        space={0}
      >
        <TChildrenRenderer tchildren={tnode.children} />
      </List.Unordered>
    )
  },
  ol: (props) => {
    const {
      tnode,
      ...rest
    } = props
    return (
      <List.Unordered
        {...rest}
        space={0}
      >
        <TChildrenRenderer
          tchildren={tnode.children}
          propsForChildren={{
            startIndex: tnode.attributes.start
              ? Number(tnode.attributes.start)
              : 1,
          }}
        />
      </List.Unordered>
    )
  },
  li: (props) => {
    const {
      tnode,
      propsFromParent,
      renderIndex,
      ...rest
    } = props
    const NESTED_MARKER = [
      <Icon
        name="dot-single"
        alignSelf="center"
        size={4}
        as={Entypo}
      />,
      <Icon
        name="circle"
        alignSelf="center"
        size="9px"
        as={Entypo}
      />,
      <Icon
        name="controller-stop"
        alignSelf="center"
        mr={1}
        size={3}
        as={Entypo}
      />,
    ]

    const marker = NESTED_MARKER[tnode.markers.ulNestLevel] ?? '- '
    return (
      <List.Item
        {...rest}
        p={1}
      >
        <Text alignItems="center">
          {
              propsFromParent.startIndex !== undefined
                ? `${propsFromParent.startIndex + renderIndex}. `
                : marker
          }
          <View>
            <TChildrenRenderer
              tchildren={tnode.children}
            />
          </View>
        </Text>
      </List.Item>
    )
  },
}

function tnodeEndsWithNewLine(tnode: TNode): boolean {
  if (tnode.type === 'text') {
    return tnode.data.endsWith('\n')
  }
  const lastChild = tnode.children[tnode.children.length - 1]
  return lastChild ? tnodeEndsWithNewLine(lastChild) : false
}

const headerTags = {
  h1: 'md',
  h2: 'lg',
  h3: 'xl',
  h4: '2xl',
  h5: '3xl',
  h6: '4xl',
}

Object.keys(headerTags).forEach((key) => {
  renderers[key] = (props) => {
    const {
      tnode,
      ...rest
    } = props
    return (
      <Heading
        {...rest}
        size={headerTags[key]}
      >
        <TChildrenRenderer tchildren={props.tnode.children} />
      </Heading>
    )
  }
})
