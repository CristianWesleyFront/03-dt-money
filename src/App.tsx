import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Transactions } from './pages/Transactions'
import { TransactionProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
