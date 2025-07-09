import Transaction from './Transaction';

export default function Transactions({ transactions, onDelete }) {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Your Transactions</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No transactions yet.</p>
      ) : (
        <ul className="space-y-3">
          {transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
}
