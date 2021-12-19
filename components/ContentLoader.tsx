import * as R from 'colay/ramda'
import {
  FlatList,
  useColorModeValue,
  useToken,
} from 'native-base'
import React from 'react'
import {
  useWindowDimensions,
  Platform,
  View,
} from 'react-native'
// import { isWeb  }from '@utils'

const ContentLoaderNative = <View />
// isWeb()
//   ? require('react-content-loader').default
// : require('react-content-loader/native').default

const ITEM_COUNT = 50

export const ContentLoader = (props: any) => {
  const [data] = React.useState(R.range(0, ITEM_COUNT))
  const { width } = useWindowDimensions()
  const colorTokens = useColorModeValue(

    {
      backgroundColor: 'light.300',
      foregroundColor: 'light.100',
    },
    {
      backgroundColor: 'light.500',
      foregroundColor: 'light.50',
    },
  )

  const [
    backgroundColor,
    foregroundColor,
  ] = useToken(
    'colors',
    [colorTokens.backgroundColor, colorTokens.foregroundColor],
  )
  return (
    <FlatList
      style={{
        width: '100%',
        height: '100%',
      }}
      contentContainerStyle={{
        width: '100%',
        height: '100%',
      }}
      data={data}
      keyExtractor={(_, index) => `${index}`}
      renderItem={() => (
        <ContentLoaderNative
          // height={layout.height}
          width={width}
          speed={2}
          backgroundColor={backgroundColor}
          foregroundColor={foregroundColor}
          // backgroundColor={backgroundColor}
          // viewBox={`0 0 ${width} 100`}
          // primaryColor="#f3f3f3"
          // secondaryColor="#ecebeb"
          {...props}
        />
        // <ContentLoaderNative viewBox={`0 0 ${width} 70`}>
        //   <Circle
        //     cx="30"
        //     cy="30"
        //     r="30"
        //   />
        //   <Rect
        //     x="80"
        //     y="17"
        //     rx="4"
        //     ry="4"
        //     width={`${width - 80}`}
        //     height="26"
        //   />
        //   <Rect
        //     x="80"
        //     y="40"
        //     rx="3"
        //     ry="3"
        //     width={`${width - 130}`}
        //     height="20"
        //   />
        // </ContentLoaderNative>
      )}
      onEndReachedThreshold={3}
      // onEndReached={() => {
      //   setData(data.concat(R.range(0, ITEM_COUNT)))
      // }}
    />
  )
}
