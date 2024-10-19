import { GameSessionsApi } from '../api/gameSessionsApi';
import { createGameSessionsModule } from '../modules/createGameSessionsModule';
import { FetchService } from './fetchService';

const fetchService = new FetchService({ logRequests: import.meta.env.DEV });
const gameSessionsApi = new GameSessionsApi(fetchService);

export const gameSessionsModule = createGameSessionsModule({ gameSessionsApi });
