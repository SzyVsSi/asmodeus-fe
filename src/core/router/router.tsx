import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import TheBeginning from '@/pages/room/two/the-beginning';
import TheVictims from '@/pages/room/two/the-victims';

// Lazy loading the components for each route
const HomeRoute = lazy(() => import('@/pages/home'));
const RoomOneRoute = lazy(() => import('@/pages/room/one'));
const RoomTwoRoute = lazy(() => import('@/pages/room/two'));
const RoomThreeRoute = lazy(() => import('@/pages/room/three'));
const TheIncident = lazy(() => import('@/pages/room/two/the-incident'));
const Run = lazy(() => import('@/pages/run'));

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
