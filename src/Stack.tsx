import React from 'react'
import warning from 'tiny-warning'
import { ST, ComponentsNames } from './utils'

type Size = string | number
type Props = {
  type: ST
  size?: Size
  minSize: Size
  children: React.ReactElement | React.ReactElement[]
}
const ComponentNamesKeys = Object.keys(ComponentsNames)
const validateChildren = (children: React.ReactElement[]) => {
  warning(
    children.some(
      (child: any) => !ComponentNamesKeys.includes(child.type.name)
    ),
    'Invalid Stack configuration'
  )
}

export const Stack = ({ children }: Props) => {
  const childrenArray = Array.isArray(children)
    ? children
    : children
    ? [children]
    : []

  validateChildren(childrenArray)
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
