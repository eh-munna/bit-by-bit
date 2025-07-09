import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../../../redux/features/transaction/transactionSlice';
import Transaction from './Transaction';

export default function Transactions() {
  const { transactions } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Your Transactions</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No transactions yet.</p>
      ) : (
        <ul className="space-y-3">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </>
  );
}
