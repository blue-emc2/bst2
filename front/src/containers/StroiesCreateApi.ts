import axios from 'axios';
import { ApiConfig, DEFAULT_API_CONFIG } from './APIConfig';
import { SectionForRequest } from '../types/StoryCreateApiProps';
import { LayoutProps } from '../App';

export const StroiesCreateApi = (
  data: LayoutProps,
  optionConfig?: ApiConfig,
) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };

  // sectionが送信用のパラメーターになっていなかった。設計ミスで受信用と送信用でバラバラになってしまった。
  const sectionForRequest: SectionForRequest[] = [];

  data.sections.forEach(value => {
    const params: any = {
      layoutType: value.layoutType,
      text: {
        body: value.body,
      },
    };
    sectionForRequest.push(params);
  });

  const instance = axios.create(config);
  const createStroies = async () => {
    try {
      const params = {
        story: {
          characterName: data.characterName,
          userName: data.userName,
          sections: sectionForRequest,
        },
      };
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
