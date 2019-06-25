export interface ApiConfig {
  baseURL: string;
  timeout: number;
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://pacific-sands-39437.herokuapp.com/api/v1/'
      : 'http://localhost:5000/api/v1/',
  timeout: 7000,
};
