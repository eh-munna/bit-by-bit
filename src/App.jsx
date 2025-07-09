import { RouterProvider } from 'react-router';
import { router } from './Routes/router';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
