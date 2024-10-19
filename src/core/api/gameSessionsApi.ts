import type { FetchService } from '../services/fetchService';
import type { ApiGameSession } from './types';

export class GameSessionsApi {
  constructor(private fetchService: FetchService) {}

  async getGameSessions() {
    return this.fetchService.get<Array<ApiGameSession>>('/');
  }
}
