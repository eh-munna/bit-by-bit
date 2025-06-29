import Button from '@/components/ui/Button';
import { useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter</h1>
      <div className="text-5xl font-semibold text-blue-600 mb-6">{count}</div>
      <div className="space-x-4">
        <Button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrement
        </Button>
        <Button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Increment
        </Button>
      </div>
    </div>
  );
}
