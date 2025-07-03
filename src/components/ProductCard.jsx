import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducers/cart/actions';
import { calculateQuantity } from '../redux/reducers/products/actions';
import Button from './ui/Button';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(calculateQuantity(product.id));
  };

  return (
    <>
      <div className="group relative flex flex-col h-full p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition duration-300">
        {/* Product Image */}
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt={product.name || 'Product image'}
            className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-300"
          />
        )}

        {/* Content area */}
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
            {product.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {product.category}
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              €{Number(product.price).toFixed(2)}
            </span>
            <span className="text-xs font-medium bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-100 px-2 py-1 rounded-full">
              {product.quantity} in stock
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4">
          <Button
            disabled={product.quantity === 0}
            onClick={() => handleAddToCart(product)}
            className={'w-full disabled:cursor-not-allowed'}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
}
