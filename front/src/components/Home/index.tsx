import React, { FC, useState, useEffect } from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import StroyList from '../../containers/StoryList';
import Spinner from '../Spinner';
import { StoriesIndexApi } from '../../containers/StoriesIndexApi';
import { Datum } from '../../types/StoriesIndexApiProps';

const useFetchStoriesIndex = () => {
  const [loaded, setLoaded] = useState(false);
  const [stories, setStories] = useState<Datum[]>([]);
  const getStories = StoriesIndexApi();

  useEffect(() => {
    getStories().then(response => {
      setStories(response);
      setLoaded(true);
    });
  }, [getStories]);

  return {
    loaded,
    data: stories,
  };
};

const Home: FC<{}> = () => {
  const { loaded, data } = useFetchStoriesIndex();

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

      {loaded ? <StroyList data={data} /> : <Spinner />}
    </>
  );
};

export default Home;
