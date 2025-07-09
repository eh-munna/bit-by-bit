import { useState } from 'react';

export default function ExpenseForm({ transactions, setTransactions }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');

  const handleAddTransaction = (e) => {
    e.preventDefault();

    if (!name || !amount) return;

    const newTransaction = {
      id: crypto.randomUUID(),
      name,
      type,
      amount: parseFloat(amount),
    };

    setTransactions([newTransaction, ...transactions]);
    setName('');
    setAmount('');
    setType('income');
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded border dark:bg-gray-700"
        />

        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value="income"
              checked={type === 'income'}
              onChange={() => setType('income')}
            />
            Income
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value="expense"
              checked={type === 'expense'}
              onChange={() => setType('expense')}
            />
            Expense
          </label>
        </div>

        <input
          type="number"
          step="0.01"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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
