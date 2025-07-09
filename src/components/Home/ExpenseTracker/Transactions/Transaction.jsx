import { SquarePen, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateModal } from '../../..';
import { deleteTransaction } from '../../../../redux/features/transaction/transactionSlice';

export default function Transaction({ transaction }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

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
            €{(transaction.amount).toFixed(2)}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="text-blue-600 hover:text-blue-800"
          >
            <SquarePen size={20} />
          </button>
          <button
            onClick={() => handleDelete(transaction.id)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={20} />
          </button>
        </div>
        {showModal && (
          <UpdateModal transaction={transaction} setShowModal={setShowModal} />
        )}
      </li>
    </>
  );
}
