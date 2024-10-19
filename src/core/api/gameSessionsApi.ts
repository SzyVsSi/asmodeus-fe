import type { FetchService } from '../fetchService';
import type { ApiGameSession } from '../../types/gameSession';

export class GameSessionsApi {
  constructor(private fetchService: FetchService) {}

  async getGameSessions() {
    return this.fetchService.get<Array<ApiGameSession>>('/');
  }
}
