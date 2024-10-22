import { useMutation } from '@tanstack/react-query';
import type { GameSessionsApi } from '../api/gameSessionsApi';
import type { ApiRoom, ApiVerifyCodeResponse } from '../api/types';

export const createGameSessionsModule = ({
	gameSessionsApi,
}: {
	gameSessionsApi: GameSessionsApi;
}) => {
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

	const useDeleteToken = () => {
		const { mutateAsync, isPending, error } = useMutation<
			ApiVerifyCodeResponse,
			Error,
			string
		>({
			mutationFn: (token) => gameSessionsApi.deleteToken(token),
		});

		return {
			deleteToken: mutateAsync,
			isPending,
			error,
		};
	};

	return {
		useCheckCode,
		useVerifyToken,
		useDeleteToken,
	};
};
