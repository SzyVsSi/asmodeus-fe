import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { lazy } from 'react';

const HomeRoute = lazy(() => import('../pages/home'));

export const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <HomeRoute />,
  },
]);
