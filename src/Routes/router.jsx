import { createBrowserRouter } from 'react-router';
import Layout from '../components/layout/Layout';
import { AddVideoForm, EditVideoForm } from '../pages';
import Home from '../pages/Home';
import Video from '../pages/Video';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/videos/:videoId', element: <Video /> },
      { path: '/videos/add-video', element: <AddVideoForm /> },
      { path: '/videos/edit-video/:videoId', element: <EditVideoForm /> },
    ],
  },
]);
