import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  oneOpenNewTransactionModal: () => void;
}

export function Header({ oneOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="drMoney" />

        <button onClick={oneOpenNewTransactionModal} type="button">
          New Transaction
        </button>
      </Content>
    </Container>
  );
}
