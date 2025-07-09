import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../../redux/features/transaction/transactionSlice';

export default function ExpenseForm() {
  const dispatch = useDispatch();

  const initialTransaction = {
    name: '',
    type: 'income',
    amount: 0,
  };

  const [transaction, setTransaction] = useState(initialTransaction);

  const handleChange = (e) => {
    setTransaction((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const { name, type, amount } = transaction;

  const handleAddTransaction = async (e) => {
    e.preventDefault();

    if (!name || !amount) return;

    const newTransaction = {
      id: crypto.randomUUID(),
      name,
      type,
      amount: parseFloat(amount),
    };

    try {
      await dispatch(addTransaction(newTransaction)).unwrap();
      setTransaction(initialTransaction);
    } catch (err) {
      console.error('Error saving transaction:', err);
      // optionally show a toast or UI error message
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Add New Transaction</h2>
      <form
        onSubmit={handleAddTransaction}
        className="flex flex-col gap-4 mb-8"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
          className="p-2 rounded border dark:bg-gray-700"
        />

        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value="income"
              checked={type === 'income'}
              onChange={handleChange}
            />
            Income
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value="expense"
              checked={type === 'expense'}
              onChange={handleChange}
            />
            Expense
          </label>
        </div>

        <input
          type="number"
          step="0.01"
          name="amount"
          placeholder="Amount"
          value={amount}
          onChange={handleChange}
          className="p-2 rounded border dark:bg-gray-700"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Add Transaction
        </button>
      </form>
    </>
  );
}
