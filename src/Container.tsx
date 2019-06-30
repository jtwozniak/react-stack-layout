import React from 'react'

type Props = {
  id?: string
  component: React.ComponentType
  isVisible: boolean
  props?: any
}

export const Container = ({ isVisible, component: Comp, props }: Props) => {
  return isVisible ? <Comp {...props} /> : null
}
