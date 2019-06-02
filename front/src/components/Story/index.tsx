import React, { FC } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { RouteComponentProps, Redirect, withRouter } from 'react-router';
import { sampleData } from '../../types/storyProps';
import SectionList from '../../containers/SectionList';

type StoryProps = {} & RouteComponentProps<{ id: string }>;

// TODO: このコンポーネントはPreview/indexと大体同じなので共通化したくなるが、APIとの連携が終わってからにする
const Story: FC<StoryProps> = ({ history, location, match }) => {
  return (
    <>
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1" data-cy="charactername">
          {sampleData.data.charactername}
        </Header>
      </Container>

      <Container text>
        <Header as="h1" data-cy="username">
          {sampleData.data.username}
        </Header>
      </Container>

      <SectionList sections={sampleData.data.sections} />
    </>
  );
};

export default withRouter(Story);
