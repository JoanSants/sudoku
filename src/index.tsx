import React from 'react'
import ReactDOM from 'react-dom'
import { reportWebVitals } from './core'
import { GlobalStyles } from './styles'

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <div>Hello Word</div>
    </>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
