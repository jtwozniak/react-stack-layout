import React from 'react'
import styled from 'styled-components'
import { Menu } from './Menu'
import { Example1 } from './Example1'
import { Example2 } from './Example2'

const Flex = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

const MenuDiv = styled.div`
  flex: 0;
`

const ExampleDiv = styled.div`
  flex: 1;
`

const examples: React.ComponentType[] = [Example1, Example2]
const examplesNames = examples.map(comp => comp.displayName as string)

export const ExamplesApp = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  console.log('Examples', examplesNames, examples)
  const Example = examples[selectedIndex]

  return (
    <Flex>
      <MenuDiv>
        <Menu
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          elements={examplesNames}
        />
      </MenuDiv>
      <ExampleDiv>
        <Example />
      </ExampleDiv>
    </Flex>
  )
}
