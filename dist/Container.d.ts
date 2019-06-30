import React from 'react'
declare type Props = {
  id?: string
  component: React.ComponentType
  isVisible: boolean
  props?: any
}
export declare const Container: ({
  isVisible,
  component: Comp,
  props,
}: Props) => JSX.Element | null
export {}
