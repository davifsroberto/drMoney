import { Container } from './styles';
import { useTransactions } from '../../hooks/useTransactions';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export default function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },

    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <section>
        <header>
          <span>Income</span>

          <figure>
            <img src={incomeImg} alt="Entradas" />
          </figure>
        </header>

        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </section>

      <section>
        <header>
          <p>Outcome</p>

          <figure>
            <img src={outcomeImg} alt="Saídas" />
          </figure>
        </header>

        <strong>
          {summary.withdraws !== 0 ? '-' : ''}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}
        </strong>
      </section>

      <section className="highlight-background">
        <header>
          <p>Total</p>

          <figure>
            <img src={totalImg} alt="Total" />
          </figure>
        </header>

        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </section>
    </Container>
  );
}
