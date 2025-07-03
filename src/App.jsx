import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Feature from '@/components/ui/Feature';
import ProductBoard from './components/ProductBoard';

export default function App() {
  return (
    <>
      <Header />

      <main className="container py-6 min-h-screen px-4 w-full mx-auto">
        <Feature>
          <h1 className="text-3xl font-bold mb-4">
            Redux Product & Cart Management
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            This application uses Redux to manage your product inventory and
            shopping cart seamlessly. You can
            <code className="bg-gray-100 dark:bg-gray-800 px-1 mx-1 rounded">
              add
            </code>
            new products into stock, track
            <code className="bg-gray-100 dark:bg-gray-800 px-1 mx-1 rounded">
              inventory levels
            </code>
            in real time, and
            <code className="bg-gray-100 dark:bg-gray-800 px-1 mx-1 rounded">
              add
            </code>
            products to your shopping cart. Each time a product is added to the
            cart, the available stock is automatically reduced, ensuring
            accurate inventory management. The cart displays
            <code className="bg-gray-100 dark:bg-gray-800 px-1 mx-1 rounded">
              total quantities
            </code>
            and
            <code className="bg-gray-100 dark:bg-gray-800 px-1 mx-1 rounded">
              total prices
            </code>
            for a clear overview of your current purchases. All actions update
            the Redux store predictably, keeping your product and cart data
            centralized and consistent throughout the application.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Learn Redux Reducers
            </a>

            <a
              href="https://github.com/eh-munna/bit-by-bit/tree/redux_2.2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              View on GitHub
            </a>
          </div>
        </Feature>

        <Feature>
          <ProductBoard />
        </Feature>
      </main>

      <Footer />
    </>
  );
}
