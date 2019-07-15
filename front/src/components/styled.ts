// .d.ts 型定義ファイルっていうものにしたかったけどよく分からなかった
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

export const MainContainer = styled(Container)`
  background: ${props => props.background || 'white'};
  background-clip: border-box;
  color: ${props => props.color || 'black'};
  min-height: 100vh;
  padding: 1em;
`;

export const ThemeWithP = styled.p`
  color: ${props => props.title || 'black'};
`;

export const Pre = styled.pre`
  font-family: 'Noto Sans JP', sans-serif;
`;
