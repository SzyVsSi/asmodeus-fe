import type { FetchService } from '../services/fetchService';
import type { ApiGameSession, ApiVerifyCodeResponse } from './types';

export class GameSessionsApi {
	constructor(private fetchService: FetchService) {}

	async getGameSessions() {
		return this.fetchService.get<Array<ApiGameSession>>('/asmodeus');
	}

	async checkValidToken(token: string) {
		return this.fetchService.post<ApiVerifyCodeResponse>(
			`/verify-code/${token}`,
		);
	}
}
