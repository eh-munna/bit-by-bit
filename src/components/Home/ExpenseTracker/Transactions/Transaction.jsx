import { SquarePen, Trash2 } from 'lucide-react';

export default function Transaction({ transaction, onDelete }) {
  return (
    <>
      <li
        key={transaction.id}
        className="flex justify-between items-center bg-gray-200 dark:bg-gray-700 p-3 rounded"
      >
        <div>
          <span className="font-medium">{transaction.name}</span>{' '}
          <span
            className={`ml-2 ${
              transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            €{transaction.amount.toFixed(2)}
          </span>
        </div>
        <div className="flex gap-2">
          <button className="text-blue-600 hover:text-blue-800">
            <SquarePen size={20} />
          </button>
          <button
            onClick={() => onDelete(transaction.id)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </li>
    </>
  );
}
