import React from 'react'
import { StackTypes } from './utils'
export declare const Container: {
  ({
    isVisible,
    component: Comp,
    children,
  }: React.PropsWithChildren<{
    id?: string | undefined
    component: React.ComponentType<{}>
    isVisible: boolean
    props?: any
  }>): JSX.Element | null
  defaultProps: {
    isVisible: boolean
  }
  displayName: StackTypes
}
