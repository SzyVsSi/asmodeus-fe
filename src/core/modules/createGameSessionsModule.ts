import { useQuery } from '@tanstack/react-query';
import type { GameSessionsApi } from '../api/gameSessionsApi';
import { mapGameSessionsToGameSessionEntity } from '../api/helpers';

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

  return {
    useGetAllGameSessions,
  };
};
