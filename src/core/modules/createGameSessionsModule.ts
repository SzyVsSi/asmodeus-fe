import { useMutation, useQuery } from '@tanstack/react-query';
import type { GameSessionsApi } from '../api/gameSessionsApi';
import { mapGameSessionsToGameSessionEntity } from '../api/helpers';
import type { ApiVerifyCodeResponse } from '../api/types';

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

	const useVerifyCode = () => {
		const { mutateAsync, error, isPending } = useMutation<
			ApiVerifyCodeResponse,
			Error,
			string
		>({
			mutationFn: (token) => gameSessionsApi.checkValidToken(token),
		});

		return {
			verifyCode: mutateAsync,
			error,
			isPending,
		};
	};

	return {
		useGetAllGameSessions,
		useVerifyCode,
	};
};
