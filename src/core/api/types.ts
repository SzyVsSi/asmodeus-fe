export type ApiGameSession = {
	token: string;
	room_one: boolean;
	room_two: boolean;
	room_three: boolean;
};

export type ApiVerifyCodeResponse = {
	success: true;
};

export type ApiRoom = 'room_one' | 'room_two' | 'room_three';
