import React from 'react'
import { StackTypes } from './utils'

type Props = React.PropsWithChildren<{
  id?: string
  component: React.ComponentType
  isVisible: boolean
  props?: any
}>

export const Container = ({ isVisible, component: Comp, children }: Props) => {
  return isVisible ? <div>{Comp ? <Comp /> : children}</div> : null
}

Container.defaultProps = {
  isVisible: true,
}

Container.displayName = StackTypes.Container
