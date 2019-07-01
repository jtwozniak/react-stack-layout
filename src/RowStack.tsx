import React from 'react'
import { StackTypes } from './utils'

type Props = React.PropsWithChildren<{}>

export const RowStack = ({ children }: Props) => {
  return <div>{children}</div>
}

RowStack.displayName = StackTypes.RowStack
