import React from 'react'
export declare enum ST {
  Tab = 'Tab',
  Row = 'Row',
  Column = 'Column',
  Container = 'Container',
}
export declare type Children = React.ReactElement | React.ReactElement[]
export declare const validateChildren: (
  children: React.ReactElement<
    any,
    | string
    | ((
        props: any
      ) => React.ReactElement<
        any,
        string | any | (new (props: any) => React.Component<any, any, any>)
      > | null)
    | (new (props: any) => React.Component<any, any, any>)
  >[]
) => boolean
