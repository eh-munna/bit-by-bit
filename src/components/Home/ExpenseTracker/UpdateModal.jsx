import { X } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTransaction } from '../../../redux/features/transaction/transactionSlice';

export default function UpdateModal({ transaction, setShowModal }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState({
    ...transaction,
    amount: String(transaction.amount),
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEdit((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const { name, type, amount } = edit;

  const handleUpdateTransaction = async (e) => {
    e.preventDefault();

    if (!name || !amount) return;

    const updatedTransaction = {
      id: transaction.id,
      name,
      type,
      amount: parseFloat(amount),
    };

    try {
      setLoading(true);
      await dispatch(
        editTransaction({ id: transaction.id, transaction: updatedTransaction })
      );
      setShowModal(false);
    } catch (err) {
      console.error('Error saving transaction:', err);
      // Optionally show a toast or message
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        {/* Modal container */}
        <div className="relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
          {/* Close button */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center">
            Edit Transaction
          </h2>

          <form
            onSubmit={handleUpdateTransaction}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />

            <div className="flex gap-6">
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
              className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Update Transaction'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
