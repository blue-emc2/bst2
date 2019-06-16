import axios from 'axios';
import { ApiConfig, DEFAULT_API_CONFIG } from './APIConfig';
import { StroiesIndexAPIProps, Datum } from '../types/StoriesIndexApiProps';

export const StoriesIndexApi = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };

  const instance = axios.create(config);
  const getStories = async () => {
    try {
      const response = await instance.get<StroiesIndexAPIProps>('/stories', {
        timeout: config.timeout,
      });

      if (response.status !== 200) {
        throw new Error('Server Error');
      }
      const stories: Datum[] = response.data.data;

      return stories;
    } catch (err) {
      throw err;
    }
  };

  return getStories;
};
