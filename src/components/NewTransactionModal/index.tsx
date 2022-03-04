import Modal from 'react-modal';

import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [typeTransaction, setTypeTransaction] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" type="button">
        <img onClick={onRequestClose} src={closeImg} alt="Close Modal" />
      </button>
      <Container>
        <h2>New Transaction</h2>

        <input type="text" placeholder="Title" />

        <input type="number" placeholder="Value" />

        <TransactionTypeContainer>
          <RadioBox
            onClick={() => {
              setTypeTransaction('deposit');
            }}
            isActive={typeTransaction === 'deposit'}
            type="button"
          >
            <img src={incomeImg} alt="Income" />

            <span>Income</span>
          </RadioBox>

          <RadioBox
            onClick={() => {
              setTypeTransaction('withdraw');
            }}
            isActive={typeTransaction === 'withdraw'}
            type="button"
          >
            <img src={outcomeImg} alt="Outcome" />

            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Category" />

        <button type="submit">Create</button>
      </Container>
    </Modal>
  );
}
