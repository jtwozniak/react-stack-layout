import React from 'react'
import { StackTypes } from './utils'

type Props = React.PropsWithChildren<{}>

export const ColumnStack = ({ children }: Props) => {
  return <div>{children}</div>
}

ColumnStack.displayName = StackTypes.ColumnStack
