import axios from 'axios';
import { ApiConfig, DEFAULT_API_CONFIG } from './APIConfig';

const StoriesDestoryApi = (id: string, optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };

  const instance = axios.create(config);
  const destroy = async () => {
    try {
      const response = await instance.delete(`/stories/${id}`, {
        timeout: config.timeout,
      });

      return response;
    } catch (err) {
      throw err;
    }
  };

  return destroy;
};

export default StoriesDestoryApi;
