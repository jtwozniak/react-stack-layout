import React from 'react'
import { ST, validateChildren } from './utils'

type Props = {
  type: ST
  width: string | number
  height: string | number
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
      }}
    >
      {children}
    </div>
  )
}

Stack.displayName = 'Stack'
