import { FormEvent, useState } from 'react';

import Modal from 'react-modal';

import { api } from '../../services/api';
import { Form, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [typeTransaction, setTypeTransaction] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      typeTransaction,
    };

    api.post('/transactions', data).then((r) => {
      console.log(r);
    });
  }

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

      <Form onSubmit={handleCreateNewTransaction}>
        <h2>New Transaction</h2>

        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          type="text"
          placeholder="Title"
        />

        <input
          onChange={(event) => setValue(Number(event.target.value))}
          value={value}
          type="number"
          placeholder="Value"
        />

        <TransactionTypeContainer>
          <RadioBox
            onClick={() => {
              setTypeTransaction('deposit');
            }}
            isActive={typeTransaction === 'deposit'}
            activeColor="green"
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
            activeColor="red"
            type="button"
          >
            <img src={outcomeImg} alt="Outcome" />

            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          onChange={(event) => setCategory(event.target.value)}
          value={category}
          type="text"
          placeholder="Category"
        />

        <button type="submit">Create</button>
      </Form>
    </Modal>
  );
}
