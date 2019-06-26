export interface ApiConfig {
  baseURL: string;
  timeout: number;
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: process.env.REACT_APP_SERVER_URL as string,
  timeout: 7000,
};
