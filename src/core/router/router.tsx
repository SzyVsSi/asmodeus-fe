import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

// Lazy loading the components for each route
const HomeRoute = lazy(() => import('@/pages/home'));
const RoomOneRoute = lazy(() => import('@/pages/rooms/the-deed'));
const RoomTwoRoute = lazy(() => import('@/pages/rooms/the-john-doe-show'));
const RoomThreeRoute = lazy(() => import('@/pages/rooms/the-truth'));
const TheIncident = lazy(
	() => import('@/pages/rooms/the-john-doe-show/the-incident'),
);
const Run = lazy(() => import('@/pages/run'));
const TheBeginning = lazy(
	() => import('@/pages/rooms/the-john-doe-show/the-beginning'),
);
const TheVictims = lazy(
	() => import('@/pages/rooms/the-john-doe-show/the-victims'),
);

export const router = createBrowserRouter([
	{
		path: Routes.Home,
		element: <HomeRoute />,
	},
	{
		path: Routes.TheDeed,
		element: <RoomOneRoute />,
	},
	{
		path: Routes.JohnDoeShow,
		element: <RoomTwoRoute />,
	},
	{
		path: Routes.TheTruth,
		element: <RoomThreeRoute />,
	},
	{
		path: Routes.TheIncident,
		element: <TheIncident />,
	},
	{
		path: Routes.TheBeginning,
		element: <TheBeginning />,
	},
	{
		path: Routes.TheVictims,
		element: <TheVictims />,
	},
	{
		path: Routes.Run,
		element: <Run />,
	},
]);
