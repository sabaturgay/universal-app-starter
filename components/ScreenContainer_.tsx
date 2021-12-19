// import { LargeWithAppLinksAndSocial } from './footers/LargeWithAppLinksAndSocial'
import React from 'react'
import { SimpleLoading } from './loadings/Simple'
import { isServer } from '@utils'

import {
  Box,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from 'native-base'
import { ImageBackground, useWindowDimensions } from 'react-native'
import { Paper, PaperProps } from './Paper'

export type ScreenContainerProps = {
  scrollable?: boolean;
  isLoading?: boolean;
  hasFooter?: boolean;
  error?: any
  hasContent?: boolean;
  hasKeyboardAvoidingView?: boolean;
  imageBackground?: React.ComponentProps<typeof ImageBackground>
} & PaperProps

export function ScreenContainer({
  scrollable: _scrollable,
  hasKeyboardAvoidingView = false,
  children,
  isLoading,
  error,
  hasContent = false,
  imageBackground,
  hasFooter = true,
  ...rest
}: ScreenContainerProps) {
  const Container = hasKeyboardAvoidingView
    ? KeyboardAvoidingView
    : React.Fragment
  const ContainerProps = hasKeyboardAvoidingView
    ? {
      style: {
        width: '100%',
        height: '100%',
      },
    }
    : {}
  const scrollable = _scrollable ?? hasFooter
  const { height } = useWindowDimensions()
  const [scrollHeight, setScrollHeight] = React.useState(0)
  if (error) {
    return (
      <Paper
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>
          {error?.message ?? 'There was an error'}
        </Text>
      </Paper>
    )
  }
  if (isLoading) {
    return (
      <SimpleLoading hasContent={hasContent} />
    )
  }

  const ImageBackgroundContainer = imageBackground
    ? ImageBackground
    : React.Fragment
  const ImageBackgroundContainerProps = imageBackground
    ? {
      ...imageBackground,
      style: [{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      }, imageBackground?.style],
    }
    : {}
  return (
    <Paper
      flex={1}
      safeArea
      {...rest}
    >
      <ImageBackgroundContainer
        {...ImageBackgroundContainerProps}
      >
        {scrollable ? (
          <Container
            {...ContainerProps}
          >
            <ScrollView
              // style={{
              //   width: '100%',
              //   height: '100%',
              //   flex: 1,
              // }}
              contentContainerStyle={{ flexGrow: 1 }}
              onContentSizeChange={(_, height) => {
                setScrollHeight(height)
              }}
              // minH="full"
            >
              {children}
              {hasFooter && (
                <Box
                  {...((!isServer() && scrollHeight <= height) ? { position: 'absolute' } : {})}
                  bottom={0}
                  w="full"
                >
                  {/* <LargeWithAppLinksAndSocial /> */}
                </Box>
              )}
            </ScrollView>
          </Container>
        ) : (
          <Container
            {...ContainerProps}
          >
            {children}
            {/* {hasFooter && <LargeWithAppLinksAndSocial />} */}
          </Container>
        )}
      </ImageBackgroundContainer>
    </Paper>
  )
}
