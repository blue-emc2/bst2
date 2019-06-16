export interface ApiConfig {
  baseURL: string;
  timeout: number;
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'http://localhost:5000/api/v1/',
  timeout: 7000,
};
