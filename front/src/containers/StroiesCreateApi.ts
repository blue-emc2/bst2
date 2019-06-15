import axios from 'axios';
import { Section } from '../types/ApiProps';
import { ApiConfig, DEFAULT_API_CONFIG } from './APIConfig';

export const StroiesCreateApi = (
  charactername: string,
  username: string,
  sections: Section[],
  optionConfig?: ApiConfig,
) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };

  // sectionが送信用のパラメーターになっていなかった。設計ミスで受信用と送信用でバラバラになってしまった。
  const sectionForRequest: any[] = [];

  sections.forEach(value => {
    const data = {
      layoutType: value.layoutType,
      text: {
        body: value.body,
      },
    };
    sectionForRequest.push(data);
  });

  const instance = axios.create(config);
  const createStroies = async () => {
    try {
      const data = {
        story: {
          characterName: charactername,
          userName: username,
          sections: sectionForRequest,
        },
      };
      const response = await instance.post('/stories', data, {
        timeout: config.timeout,
      });

      return response;
    } catch (err) {
      throw err;
    }
  };

  return createStroies;
};
