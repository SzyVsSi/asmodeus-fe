import type { ApiGameSession } from '../api/types';

export class GameSession implements ApiGameSession {
  token: string;
  room_one: boolean;
  room_two: boolean;
  room_three: boolean;

  constructor(private gameSession: ApiGameSession) {
    this.token = gameSession.token;
    this.room_one = gameSession.room_one;
    this.room_two = gameSession.room_two;
    this.room_three = gameSession.room_three;
  }

  getRoomStatus(room: 'one' | 'two' | 'three') {
    return this.gameSession[`room_${room}`];
  }
}
