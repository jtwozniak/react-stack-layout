import React from 'react'

type Props = React.PropsWithChildren<{}>

export const RowStack = ({ children }: Props) => {
  return <div>{children}</div>
}
