import { createBrowserRouter } from 'react-router';

import { Layout } from '../components';
import { Conversation, Home, Inbox, Register } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/register', element: <Register /> },
      { path: '/inbox', element: <Conversation /> },
      { path: '/inbox/messages/:id', element: <Inbox /> },
    ],
  },
]);
