import React from 'react'

export enum ST {
  Tab = 'Tab',
  Row = 'Row',
  Column = 'Column',
  Container = 'Container',
}

export type Children = React.ReactElement | React.ReactElement[]

export const validateChildren = (children: React.ReactElement[]) => {
  let containers = 0
  return children.every((child: any) => {
    if (child.type.name === ST.Container) {
      containers++
      return containers < 1
    }
    return ST[child.type.name]
  })
}
