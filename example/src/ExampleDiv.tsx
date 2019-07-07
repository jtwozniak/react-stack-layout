import React from 'react'

type DivProps = React.PropsWithChildren<{
  color: string
}>

export const ExampleDiv = ({ color, children }: DivProps) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: color,
    }}
  >
    {children}
  </div>
)
