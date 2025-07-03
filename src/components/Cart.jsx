export default function Cart({ cart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.price || 0),
    0
  );

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-4">
        Cart
      </h2>

      <p className="text-gray-700 dark:text-gray-300 mb-2">
        You have <span className="font-bold">{totalItems}</span>{' '}
        {totalItems === 1 ? 'item' : 'items'} in your cart.
      </p>

      {cart.length > 0 ? (
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Total:{' '}
          <span className="font-bold text-indigo-600 dark:text-indigo-400">
            {`€${totalPrice.toFixed(2)}`}
          </span>
        </p>
      ) : null}

      {cart.length > 0 && (
        <ul className="mt-4 space-y-2">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between text-gray-600 dark:text-gray-300"
            >
              <span>
                {item.name}{' '}
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  (€{Number(item.price).toFixed(2)} each)
                </span>
              </span>
              <span>x{item.quantity}</span>
            </li>
          ))}
        </ul>
      )}

      {cart.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Your cart is empty.
        </p>
      )}
    </div>
  );
}
