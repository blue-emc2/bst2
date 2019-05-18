import React, { FC } from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
  List,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import StroyList, { Story } from '../../containers/StoryList';

const Home: FC<{}> = () => {
  const a = Array.from(Array(13).keys());
  const stories = a.map(
    (n: number): Story => ({
      id: n,
      header: 'Matthew',
      meta: 'author',
      description: 'Matthew is a musician living in Nashville.',
    }),
  );

  return (
    <>
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 400, padding: '1em 0em' }}
        vertical
      >
        <Container text>
          <Header as="h1" inverted content="back story" />
          <Button primary inverted size="huge">
            <Link to="/new">ストーリーを書いてみる</Link>
            <Icon name="arrow right" />
          </Button>
        </Container>
      </Segment>

      <StroyList stories={stories} />
    </>
  );
};

export default Home;
