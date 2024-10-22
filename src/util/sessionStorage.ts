// biome-ignore lint/complexity/noStaticOnlyClass: It's fine lol
export class SessionStorageService {
	static prefix = 'ASMODEUS_';

	static getItem(key: string) {
		return sessionStorage.getItem(`${SessionStorageService.prefix}${key}`);
	}

	static setItem(key: string, value: string) {
		return sessionStorage.setItem(
			`${SessionStorageService.prefix}${key}`,
			value,
		);
	}

	static removeItem(key: string) {
		return sessionStorage.removeItem(`${SessionStorageService.prefix}${key}`);
	}
}
