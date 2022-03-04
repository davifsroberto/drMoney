import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { Container } from './styles';

interface Transaction {
  id: number;
  amount: number;
  title: string;
  type: string;
  category: string;
  createdAt: string;
}

export default function TrasactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions/')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

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
