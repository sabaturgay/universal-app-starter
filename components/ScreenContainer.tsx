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
import { DefaultNavbar } from './navbars/Default'
import { Viewport } from '@components/IntersectionObserver'

export type ScreenContainerProps = {
  scrollable?: boolean;
  isLoading?: boolean;
  hasFooter?: boolean;
  hasNavbar?: boolean;
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
  hasNavbar = true,
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
  const scrollable = _scrollable ?? hasFooter ?? hasNavbar
  const { height: windowHeight } = useWindowDimensions()
  const [scrollHeight, setScrollHeight] = React.useState(0)

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
            <Viewport.Tracker>
              <ScrollView
                pb="12"
                scrollEventThrottle={1}
                stickyHeaderIndices={hasNavbar ? [0] : []}
                h={windowHeight}
                contentContainerStyle={{ flexGrow: 1 }}
                onContentSizeChange={(_, height) => {
                  setScrollHeight(height)
                }}
              >
                {hasNavbar && (
                <DefaultNavbar />
                )}
                {children}
                {hasFooter && (
                <Box
                  {...((!isServer() && scrollHeight <= windowHeight) ? { position: 'absolute' } : {})}
                  bottom={0}
                  w="full"
                >
                  {/* <LargeWithAppLinksAndSocial /> */}
                </Box>
                )}
              </ScrollView>
            </Viewport.Tracker>
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
