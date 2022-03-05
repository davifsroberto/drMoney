import { FormEvent, useState } from 'react';

import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';
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
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  const { createTransaction } = useTransactions();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ title, amount, category, type });

    setTitle('');
    setCategory('');
    setType('');
    setAmount(0);

    onRequestClose();
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
          onChange={(event) => setAmount(Number(event.target.value))}
          value={amount}
          type="number"
          placeholder="Value"
        />

        <TransactionTypeContainer>
          <RadioBox
            onClick={() => {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activeColor="green"
            type="button"
          >
            <img src={incomeImg} alt="Income" />

            <span>Income</span>
          </RadioBox>

          <RadioBox
            onClick={() => {
              setType('withdraw');
            }}
            isActive={type === 'withdraw'}
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
