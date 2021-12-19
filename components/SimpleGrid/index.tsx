import React from 'react'

import {
  Box,
  HStack,
  IBoxProps,
  VStack,
  useThemeProps,
} from 'native-base'

export type ISimpleGridProps = IBoxProps & {
  space?: number;
  columns?: number;
  minChildWidth?: number;
  spacingX?: number;
  spacingY?: number;
}

const DEBUG_STYLES = false
  ? {
    rows: { border: '1px solid black' },
    cols: { border: '1px solid red' },
  }
  : {
    rows: {},
    cols: {},
  }

const SimpleGridElement = (props: ISimpleGridProps, ref?: any): JSX.Element => {
  const {
    columns,
    space,
    spacingX,
    spacingY,
    minChildWidth,
    children,
    justifyContent,
    alignItems,
    ...remainingProps
  } = useThemeProps('SimpleGrid', props)
  const cellSpacing = space ?? 0
  const cellSpacingX = spacingX ?? cellSpacing
  const cellSpacingY = spacingY ?? cellSpacing

  const childrenArray = React.Children.toArray(children)
  // const { length } = childrenArray
  // const {
  //   onLayout,
  //   width,
  // } = useLayout()
  // const itemWidth = width / length - (cellSpacingX * (length - 1))
  if (columns) {
    const rowSlices = []
    for (let i = 0; i < childrenArray.length; i += columns) {
      rowSlices.push(childrenArray.slice(i, i + columns))
    }

    return (
      <VStack
        {...DEBUG_STYLES.rows}
        space={cellSpacingY}
        {...remainingProps}
        ref={ref}
      >
        {rowSlices.map((row, rowIndex) => (
          <HStack
            space={cellSpacingX}
            key={rowIndex}
            justifyContent={justifyContent}
            alignItems={alignItems}
            width="full"// "99%"
          >
            {row.map((col: any) => (
              <Box
                flex={1}
                {...DEBUG_STYLES.cols}
                key={col.key}
              >
                {col}
              </Box>
            ))}
          </HStack>
        ))}
      </VStack>
    )
  }
  // Needs more work for empty spacing i.e. auto-fit. Current workaround is to use wrap and let the columns be created dynamically
  // https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
  if (minChildWidth) {
    return (
      <Box
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        {...remainingProps}
        ref={ref}
      >
        {childrenArray.map((col: any) => (
          <Box
            {...DEBUG_STYLES.cols}
            flex={1}
            mx={cellSpacingX}
            my={cellSpacingY}
            key={col.key}
            minWidth={minChildWidth}
          >
            {col}
          </Box>
        ))}
      </Box>
    )
  }

  return <></>
}

export const SimpleGrid = React.memo(React.forwardRef(SimpleGridElement))
