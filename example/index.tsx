import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import { ExamplesApp } from './src//ExamplesApp'

const App = () => {
  return (
    <div>
      <ExamplesApp />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
