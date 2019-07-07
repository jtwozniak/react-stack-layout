import React from 'react'
import { ST } from './utils'
declare type Size = string | number
declare type Props = {
  type: ST
  size?: Size
  minSize: Size
  children: React.ReactElement | React.ReactElement[]
}
export declare const Stack: {
  ({ children }: Props): JSX.Element
  displayName: string
}
export {}
