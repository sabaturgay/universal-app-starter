import React from 'react'
import { Paper } from '@components/Paper'
// import { ContentLoader } from '@components/ContentLoader'
import { Spinner } from 'native-base'

export type SimpleLoadingProps = {
  hasContent?: boolean;
}

export const SimpleLoading = (props: SimpleLoadingProps) => {
  const { hasContent } = props
  return (
    <Paper
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {hasContent ? <Spinner /> : <Spinner />}
    </Paper>
  )
}
