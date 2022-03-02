import { Container } from './styles';
import incomeImg from '../../assets/income.svg';

export default function Summary() {
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
