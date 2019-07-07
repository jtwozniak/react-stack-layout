import React from 'react'

export enum ST {
  Tab = 'Tab',
  Row = 'Row',
  Column = 'Column',
}

export enum ComponentsNames {
  Stack = 'Stack',
  Container = 'Container',
}

export type Children = React.ReactElement | React.ReactElement[]
