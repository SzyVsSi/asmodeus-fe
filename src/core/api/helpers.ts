import { GameSession } from '../modules/gameSession';
import type { ApiGameSession } from './types';

export const mapGameSessionsToGameSessionEntity = (
  gameSessions: Array<ApiGameSession>,
) => {
  return gameSessions.map((gameSession) => new GameSession(gameSession));
};
