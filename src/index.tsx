import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { reportWebVitals } from './core'
import { GlobalStyles, theme } from './styles'
import { Content, Title, Card, Grid } from './components'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content>
        <Title>Sudoku</Title>
        <Card>
          <Grid />
        </Card>
      </Content>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
