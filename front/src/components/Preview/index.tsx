import React, { FC, useState, useEffect } from 'react';
import { Container, Header, Segment, Button } from 'semantic-ui-react';
import { RouteComponentProps, withRouter } from 'react-router';
import { LayoutProps } from '../../App';
import SectionList from '../../containers/SectionList';
import { StroiesCreateApi } from '../../containers/StroiesCreateApi';

type routerWithLayoutProps = RouteComponentProps & LayoutProps;

const Deliver: FC<routerWithLayoutProps> = ({
  history,
  charactername,
  username,
  sections,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const createStroies = StroiesCreateApi(charactername, username, sections);
      createStroies()
        .then(response => {
          const id = response.data as number;
          history.replace(`/story/${id}`);
        })
        .catch(reason => {
          console.info(reason);
        });
    }
  }, [charactername, history, loading, sections, username]);

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
const Preview: FC<routerWithLayoutProps> = ({
  history,
  location,
  match,
  charactername,
  username,
  sections,
}) => {
  return (
    <>
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1" data-test="charactername">
          {charactername}
        </Header>
      </Container>

      <Container text>
        <Header as="h1" data-test="username">
          {username}
        </Header>
      </Container>

      <SectionList sections={sections} />

      <Segment>
        <Deliver
          history={history}
          location={location}
          match={match}
          charactername={charactername}
          username={username}
          sections={sections}
        />
      </Segment>
    </>
  );
};

export default withRouter(Preview);
