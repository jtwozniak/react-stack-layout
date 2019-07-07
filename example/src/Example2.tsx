import React from 'react'
import { ExampleDiv } from './ExampleDiv'
import { Container, Stack, ST } from '../../.'

export const Example2 = () => {
  return (
    <Stack type={ST.Tab}>
      <Stack type={ST.Row} width={100}>
        <Container>
          <ExampleDiv color="red">Example2</ExampleDiv>
        </Container>
        <Container>
          <ExampleDiv color="blue" />
        </Container>
        <Stack type={ST.Column} width={100}>
          <Container>
            <ExampleDiv color="gold" />
          </Container>
          <Container>
            <ExampleDiv color="yellow" />
          </Container>
        </Stack>
      </Stack>
      <Stack type={ST.Row} width={100}>
        <Container>tab2-row1</Container>
        <Container>tab2-row2</Container>
        <Stack type={ST.Column} width={100}>
          <Container>tab2-row3-col1</Container>
          <Container>tab2-row3-col2</Container>
        </Stack>
      </Stack>
    </Stack>
  )
}

Example2.displayName = 'Example2'
