import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import { Example } from 'src/Example'

const App = () => {
  return (
    <div>
      <Example />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
