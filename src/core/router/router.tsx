import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { lazy } from 'react';

// Lazy loading the components for each route
const HomeRoute = lazy(() => import('../../pages/home'));
const RoomOneRoute = lazy(() => import('../../pages/room/one'));
const RoomTwoRoute = lazy(() => import('../../pages/room/two'));
const RoomThreeRoute = lazy(() => import('../../pages/room/three'));

export const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <HomeRoute />,
  },
  {
    path: Routes.RoomOne,
    element: <RoomOneRoute />
  },
  {
    path: Routes.RoomTwo,
    element: <RoomTwoRoute />,
  },
  {
    path: Routes.RoomThree,
    element: <RoomThreeRoute />,
  }
]);
