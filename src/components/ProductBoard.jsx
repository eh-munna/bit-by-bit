import { useSelector } from 'react-redux';
import Cart from './Cart';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';

export default function ProductBoard() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  return (
    <div className="w-full mx-auto p-6">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transition-colors duration-300 p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-6">
          {products.length > 0 ? 'Products' : 'No products'}
        </h1>

        {/* Cart Section */}
        <div className="mb-6">
          <Cart cart={cart} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
          {/* Left side: Product Cards */}
          <div className="md:col-span-4 space-y-4">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-600 dark:text-gray-400">
                Add your first product to get started!
              </div>
            )}
          </div>

          {/* Right side: Product Adding Form */}
          <div className="md:col-span-3">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-4">
                Add a New Product
              </h2>

              <ProductForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
