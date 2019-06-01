import React, { FC } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { RouteComponentProps, Redirect, withRouter } from 'react-router';
import { sampleData } from '../../types/storyProps';
import SectionList from '../../containers/SectionList';

type StoryProps = {} & RouteComponentProps<{ id: string }>;

// TODO: このコンポーネントはPreview/indexと大体同じなので共通化したくなるが、APIとの連携が終わってからにする
const Story: FC<StoryProps> = ({ history, location, match }) => {
  const stories = Object.keys(sampleData);
  const target = match.params.id;

  return stories.includes(target) ? (
    <>
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1" data-cy="charactername">
          {sampleData[target].layout.charactername}
        </Header>
      </Container>

      <Container text>
        <Header as="h1" data-cy="username">
          {sampleData[target].layout.username}
        </Header>
      </Container>

      <SectionList sections={sampleData[target].layout.sections} />
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default withRouter(Story);
