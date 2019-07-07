import React from 'react'
import { ST } from './utils'
declare type Props = {
  type: ST
  width: string | number
  height: string | number
  children: React.ReactElement | React.ReactElement[]
}
export declare const Stack: {
  ({ children }: Props): JSX.Element
  displayName: string
}
export {}
