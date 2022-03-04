import { useContext } from 'react';

import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import { TransactionsContext } from '../../TransactionsContext';

export default function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>

          <img src={incomeImg} alt="Incomes" />
        </header>

        <strong>$1.000</strong>
      </div>
    </Container>
  );
}
