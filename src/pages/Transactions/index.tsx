import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighlight,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export const Transactions: React.FC = () => {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((element) => (
              <tr key={element.id}>
                <td width="50%">{element.description}</td>
                <td>
                  <PriceHighlight variant={element.type}>
                    {element.type === 'outcome' && '- '}
                    {priceFormatter.format(element.price)}
                  </PriceHighlight>
                </td>
                <td>{element.category}</td>
                <td>{dateFormatter.format(new Date(element.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
