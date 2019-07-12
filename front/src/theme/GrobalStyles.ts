import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line no-unused-expressions
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');

  p{
    font-family: 'Noto Sans JP', sans-serif;
  }
`;

export enum ThemeName {
  Normal = 'normal',
  Shadowbringers = 'shadowbringers',
}

const normal = {
  color: '#FFFFFF',
};

const shadowbringers = {
  color: '#A299FF',
};

export const themes = {
  normal,
  shadowbringers,
};
