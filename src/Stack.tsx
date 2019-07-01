import React from 'react'
import { StackTypes, validateChildren } from './utils'

type Props = {
  children: React.ReactElement | React.ReactElement[]
}

export const Stack = ({ children }: Props) => {
  const childrenArray = Array.isArray(children)
    ? children
    : children
    ? [children]
    : []

  console.log(validateChildren(childrenArray))
  return (
    <div
      style={{
        display: 'inline-block',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      {children}
    </div>
  )
}

Stack.displayName = StackTypes.Stack
