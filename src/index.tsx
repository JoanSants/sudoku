import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { reportWebVitals, configureStore } from './core'
import { GlobalStyles, theme } from './styles'
import { Content, Title, Card, Grid, NewButton, Numbers } from './components'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={configureStore()}>
        <Content>
          <Title>Sudoku</Title>
          <Card>
            <NewButton />
            <Grid />
            <Numbers />
          </Card>
        </Content>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
