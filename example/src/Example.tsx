import React from 'react'
import { Stack, RowStack, ColumnStack, Container } from '../../.'

export const Example = () => {
  return (
    <Stack>
      <RowStack width={100}>
        <Container>tab1-row1</Container>
        <Container>tab1-row2</Container>
        <ColumnStack>
          <Container>tab1-row3-col1</Container>
          <Container>tab1-row3-col2</Container>
        </ColumnStack>
      </RowStack>
      <RowStack>
        <Container>tab2-row1</Container>
        <Container>tab2-row2</Container>
        <ColumnStack>
          <Container>tab2-row3-col1</Container>
          <Container>tab2-row3-col2</Container>
        </ColumnStack>
      </RowStack>
    </Stack>
  )
}
