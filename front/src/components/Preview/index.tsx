import React, { FC, useState, useEffect } from 'react';
import { Container, Header, Segment, Button } from 'semantic-ui-react';
import { RouteComponentProps, withRouter } from 'react-router';
import SectionList from '../../containers/SectionList';
import { StroiesCreateApi } from '../../containers/StroiesCreateApi';
import { LayoutProps } from '../../types/LayoutProps';

type routerWithLayoutProps = RouteComponentProps & LayoutProps;

const Deliver: FC<routerWithLayoutProps> = ({ ...args }) => {
  const [loading, setLoading] = useState(false);
  const { history, characterName, userName, sections } = args;

  useEffect(() => {
    if (loading) {
      const data: LayoutProps = {
        characterName,
        userName,
        sections,
      };
      const createStroies = StroiesCreateApi(data);
      createStroies()
        .then(response => {
          const id = response.data as number;
          history.replace(`/story/${id}`);
        })
        .catch(reason => {
          console.error(reason);
        });
    }
  }, [characterName, history, loading, sections, userName]);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <>
      {loading ? (
        <Button basic loading>
          登録中...
        </Button>
      ) : (
        <Button onClick={handleClick}>公開する</Button>
      )}
    </>
  );
};

// TODO: まとめて受け取れないか？
const Preview: FC<routerWithLayoutProps> = ({ ...args }) => {
  const { characterName, userName, sections } = args;

  return (
    <>
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1" data-test="charactername">
          {characterName}
        </Header>
      </Container>

      <Container text>
        <Header as="h1" data-test="username">
          {userName}
        </Header>
      </Container>

      <SectionList sections={sections} />

      <Segment>
        <Deliver {...args} />
      </Segment>
    </>
  );
};

export default withRouter(Preview);
