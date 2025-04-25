'use client'
import { ReactNode } from 'react'
import ReactFocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import { Portal } from '../../../utils/Portal'
import { useModal } from './ModalContext'
import { ModalOverlay } from './ModalOverlay'

export const ModalPortal = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useModal()
  return (
    <Portal>
      <RemoveScroll enabled={isOpen}>
        <ReactFocusLock disabled={!isOpen} returnFocus>
          <ModalOverlay>{children}</ModalOverlay>
        </ReactFocusLock>
      </RemoveScroll>
    </Portal>
  )
}
