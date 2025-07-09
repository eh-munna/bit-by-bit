import { useEffect, useState } from 'react';
import { axiosPublic } from '../../../utils/axiosPublic';
import Balance from './Balance';
import ExpenseForm from './ExpenseForm';

import Transactions from './Transactions/Transactions';

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axiosPublic.get('/transactions');
      setTransactions(data);
    })();
  }, []);

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const totalBalance = transactions
    .reduce((acc, transaction) => {
      return transaction.type === 'income'
        ? acc + transaction.amount
        : acc - transaction.amount;
    }, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen  dark:bg-gray-900 p-6 text-gray-900 dark:text-white">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Expense Tracker</h1>
        <Balance totalBalance={totalBalance} />

        <ExpenseForm
          transactions={transactions}
          setTransactions={setTransactions}
        />
        <Transactions transactions={transactions} onDelete={handleDelete} />
      </div>
    </div>
  );
}
