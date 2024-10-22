import type { FetchService } from '../services/fetchService';
import type { ApiGameSession, ApiRoom, ApiVerifyCodeResponse } from './types';

export class GameSessionsApi {
	constructor(private fetchService: FetchService) {}

	async getGameSessions() {
		return this.fetchService.get<Array<ApiGameSession>>('/asmodeus');
	}

	async checkValidCode({
		token,
		code,
		room,
	}: {
		token: string;
		code: string;
		room: ApiRoom;
	}) {
		return this.fetchService.post<ApiVerifyCodeResponse>(
			`/verify-code/${token}`,
			{
				code,
				room,
			},
		);
	}

	async checkValidToken(token: string) {
		return this.fetchService.post<ApiVerifyCodeResponse>(
			`/verify-token/${token}`,
		);
	}
}
