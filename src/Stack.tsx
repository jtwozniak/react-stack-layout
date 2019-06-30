import React from 'react'

type Props = React.PropsWithChildren<{}>

export const Stack = ({ children }: Props) => {
  return <div>{children}</div>
}
