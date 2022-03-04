import { useContext } from 'react';

import { Container } from './styles';
import { TransactionsContext } from '../../TransactionsContext';

export default function TrasactionsTable() {
  const transactions = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>

              <td className={transaction.type}>
                {new Intl.NumberFormat('en-ie', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(transaction.amount)}
              </td>

              <td>{transaction.category}</td>

              <td>
                {new Intl.DateTimeFormat('en-ie', {
                  dateStyle: 'medium',
                }).format(new Date(transaction.createdAt))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
