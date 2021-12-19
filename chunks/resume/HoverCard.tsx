import { Pressable } from 'native-base'
import React from 'react'
// import { AnimatePresence, MotiView } from 'moti'
import { useDisclose } from 'native-base'

export type HoverCardProps = {
  Front: any;
  Back: any;
}

export const HoverCard = ({
  Front,
  Back,
}: HoverCardProps) => {
  const {
    isOpen,
    onOpen,
    onClose,
    onToggle
  } = useDisclose()
  return (
    <Pressable
      boxSize="full"
      cursor="default"
      onHoverIn={onOpen}
      onHoverOut={onClose}
      onPress={onToggle}
    >
      {
      !isOpen ? (
        <Front />
      )
        : (
          <Back />
        )
      // <AnimatePresence exitBeforeEnter>
      //   {
      //     !isOpen ? (
      //       <MotiView
      //         from={{ opacity: 0 }}
      //         animate={{ opacity: 1 }}
      //         exit={{ opacity: 0 }}
      //         // exitTransition={{ delay: 3000 }}
      //         // delay={3000}
      //         style={{
      //           width: '100%',
      //           height: '100%',
      //         }}
      //       >
      //         <Front />
      //       </MotiView>
      //     )
      //       : (
      //         <MotiView
      //           from={{ opacity: 0 }}
      //           animate={{ opacity: 1 }}
      //           exit={{ opacity: 0 }}
      //           // delay={1000}
      //           style={{
      //             width: '100%',
      //             height: '100%',
      //           }}
      //         >
      //           <Back />
      //         </MotiView>
      //       )
      //   }
      // </AnimatePresence>
  }
    </Pressable>
  )
}
