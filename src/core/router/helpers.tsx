import type { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

import { SessionStorageService } from '@/util/sessionStorage';
import type { ApiRoom } from '../api/types';
import { Routes } from './routes';

const redirects: Record<ApiRoom | 'run', Routes> = {
	room_one: Routes.Home,
	room_two: Routes.TheDeed,
	room_three: Routes.JohnDoeShow,
	run: Routes.TheTruth,
};

export const withRedirectToHome = <T extends object>(
	Component: ComponentType<T>,
) => {
	return (props: T) => {
		if (import.meta.env.DEV) {
			return <Component {...props} />;
		}

		const token = SessionStorageService.getItem('token');
		if (!token) {
			return <Navigate to={Routes.Home} replace />;
		}

		return <Component {...props} />;
	};
};

export const withRedirect = <T extends object>(
	Component: ComponentType<T>,
	roomToCheck: ApiRoom | 'run',
) => {
	return (props: T) => {
		if (import.meta.env.DEV) {
			return <Component {...props} />;
		}

		const token = SessionStorageService.getItem('token');
		if (!token) {
			return <Navigate to={Routes.Home} replace />;
		}

		const isRoomToCheckValid =
			SessionStorageService.getItem(roomToCheck) === 'true';
		if (!isRoomToCheckValid) {
			return <Navigate to={redirects[roomToCheck]} replace />;
		}

		return <Component {...props} />;
	};
};
