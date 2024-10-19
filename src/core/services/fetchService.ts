// biome-ignore lint/suspicious/noExplicitAny: It's okay here
type ObjectType = Record<string, any>;

type FetchServiceOptions = {
  logRequests?: boolean;
};

export class FetchService {
  private apiUrl =
    'https://aufzfslpqpjocwztogzo.supabase.co/functions/v1/asmodeus';

  constructor(private fetchServiceOptions: FetchServiceOptions) {}

  get<ReturnType>(url: string) {
    return this.request<ReturnType>({
      url,
      params: { method: 'GET' },
    });
  }

  put<ReturnType>(url: string, body?: unknown) {
    return this.request<ReturnType>({
      url,
      params: {
        body: JSON.stringify(body),
        method: 'PUT',
      },
    });
  }

  async request<ReturnType>({
    url,
    params,
  }: {
    url: string;
    params?: ObjectType;
  }): Promise<ReturnType> {
    if (!this.apiUrl) {
      throw new Error('The api url is undefined');
    }

    const requestHeader = {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    };

    if (this.fetchServiceOptions.logRequests) {
      console.debug('api request', { url: this.apiUrl + url, params });
    }

    const response = await fetch(this.apiUrl + url, {
      ...requestHeader,
      ...params,
    });

    return this.handleResponse(response);
  }

  private async handleResponse(res: Response) {
    if (!res.ok) {
      return Promise.reject(res);
    }

    const text = await res.text();
    try {
      const json = JSON.parse(text);
      return json;
    } catch {
      return text;
    }
  }
}
