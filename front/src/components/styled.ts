// .d.ts 型定義ファイルっていうものにしたかったけどよく分からなかった
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

export const MainContainer = styled(Container)`
  background: white;
  background-clip: border-box;
  min-height: 100vh;
  padding: 1em;
`;
