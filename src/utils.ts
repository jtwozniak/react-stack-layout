import React from 'react'

export enum StackTypes {
  Stack = 'Stack',
  RowStack = 'RowStack',
  ColumnStack = 'ColumnStack',
  Container = 'Container',
}

export type Children = React.ReactElement | React.ReactElement[]

export const validateChildren = (children: React.ReactElement[]) => {
  let containers = 0
  return children.every((child: any) => {
    if (child.type.name === StackTypes.Container) {
      containers++
      return containers < 1
    }
    return StackTypes[child.type.name]
  })
}
