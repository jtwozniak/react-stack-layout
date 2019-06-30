import React from 'react'

type Props = React.PropsWithChildren<{}>

export const ColumnStack = ({ children }: Props) => {
  return <div>{children}</div>
}
