import React from 'react'
import { Stack, RowStack, ColumnStack } from 'rsl'

export const Example = () => {
  return (
    <Stack>
      <RowStack>
        tab1-row1 tab1-row2
        <ColumnStack>tab1-row3-col1 tab1-row3-col2</ColumnStack>
      </RowStack>
      <RowStack>
        tab2-row1 tab2-row2
        <ColumnStack>tab2-row3-col1 tab2-row3-col2</ColumnStack>
      </RowStack>
    </Stack>
  )
}
