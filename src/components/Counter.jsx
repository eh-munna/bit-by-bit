import Button from '@/components/ui/Button';
import { decrement, increment } from '@/redux/counter/actions';
import { connect } from 'react-redux';

function Counter({ count, increment, decrement }) {
  return (
    <div className="flex flex-col items-center justify-center mt-12 bg-transparent transition-colors duration-300 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 tracking-tight text-gray-800 dark:text-slate-100">
        Counter
      </h1>

      <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-8">
        {count}
      </div>

      <div className="flex gap-4">
        <Button
          onClick={() => decrement(3)}
          className="cursor-pointer px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition-all duration-300"
        >
          Decrement
        </Button>
        <Button
          onClick={() => increment(10)}
          className="cursor-pointer px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition-all duration-300"
        >
          Increment
        </Button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
