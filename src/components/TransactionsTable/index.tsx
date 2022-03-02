import { useEffect } from 'react';

import { api } from '../../services/api';
import { Container } from './styles';

export default function TrasactionsTable() {
  useEffect(() => {
    api.get('transactions/').then((response) => console.log(response.data));
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
          <tr>
            <td>Websites Development</td>
            <td className="withdraw">- $12.000</td>
            <td>Development</td>
            <td>2022-03-02</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
