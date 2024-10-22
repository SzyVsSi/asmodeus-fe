import { useMutation, useQuery } from '@tanstack/react-query';
import type { GameSessionsApi } from '../api/gameSessionsApi';
import { mapGameSessionsToGameSessionEntity } from '../api/helpers';
import type { ApiRoom, ApiVerifyCodeResponse } from '../api/types';

export const createGameSessionsModule = ({
	gameSessionsApi,
}: {
	gameSessionsApi: GameSessionsApi;
}) => {
	const useGetAllGameSessions = () => {
		const { data, isLoading, error, refetch } = useQuery({
			queryKey: ['gameSessions'],
			queryFn: () =>
				gameSessionsApi
					.getGameSessions()
					.then(mapGameSessionsToGameSessionEntity),
		});

		return {
			data,
			isLoading,
			error,
			refetch,
		};
	};

	const useCheckCode = () => {
		const { mutateAsync, error, isPending } = useMutation<
			ApiVerifyCodeResponse,
			Error,
			{
				token: string;
				code: string;
				room: ApiRoom;
			}
		>({
			mutationFn: (params) => {
				return gameSessionsApi.checkValidCode(params);
			},
		});

		return {
			checkCode: mutateAsync,
			error,
			isPending,
		};
	};

	const useVerifyToken = () => {
		const { mutateAsync, error, isPending } = useMutation<
			ApiVerifyCodeResponse,
			Error,
			string
		>({
			mutationFn: (token) => gameSessionsApi.checkValidToken(token),
		});

		return {
			verifyToken: mutateAsync,
			error,
			isPending,
		};
	};

	return {
		useGetAllGameSessions,
		useCheckCode,
		useVerifyToken,
	};
};
