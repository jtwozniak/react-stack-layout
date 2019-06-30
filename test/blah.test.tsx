import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Layout } from '../src'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Layout />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
