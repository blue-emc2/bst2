import axios from 'axios';
import { ApiConfig, DEFAULT_API_CONFIG } from './APIConfig';
import { SectionForRequest } from '../types/StoryCreateApiProps';
import { LayoutProps } from '../types/LayoutProps';

export const StroiesCreateApi = (
  data: LayoutProps,
  optionConfig?: ApiConfig,
) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };

  const instance = axios.create(config);
  const createStroies = async () => {
    try {
      const params = new FormData();
      params.append('story[characterName]', data.characterName);
      params.append('story[userName]', data.userName);
      data.sections.forEach(value => {
        params.append(`story[sections][][layoutType]`, value.textPosition);
        params.append(`story[sections][][text][body]`, value.body);
        if (value.image !== undefined) {
          params.append(`story[sections][][image][body]`, value.image);
        }
      });

      const response = await instance.post('/stories', params, {
        timeout: config.timeout,
      });

      return response;
    } catch (err) {
      throw err;
    }
  };

  return createStroies;
};
