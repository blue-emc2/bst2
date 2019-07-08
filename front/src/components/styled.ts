// .d.ts 型定義ファイルっていうものにしたかったけどよく分からなかった
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

export const MainContainer = styled(Container)`
  background: black;
  background-clip: border-box;
  height: 100vh;
  padding: 1em;
`;

// 漆黒
// 背景
// style={{ backgroundColor: '#272729' }}
// 文字色
// style={{ backgroundColor: '#A299FF' }}
