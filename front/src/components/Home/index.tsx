import React, { FC, useState, useEffect } from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
  Message,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import StroyList from '../../containers/StoryList';
import Spinner from '../Spinner';
import { StoriesIndexApi } from '../../containers/StoriesIndexApi';
import { Datum } from '../../types/StoriesIndexApiProps';

const useFetchStoriesIndex = () => {
  const [loaded, setLoaded] = useState(false);
  const [stories, setStories] = useState<Datum[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getStories = StoriesIndexApi();
    getStories()
      .then(response => {
        setStories(response);
        setLoaded(true);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return {
    loaded,
    data: stories,
    isError,
  };
};

const Home: FC<{}> = () => {
  const { loaded, data, isError } = useFetchStoriesIndex();

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
          <Button primary inverted size="huge" as={Link} to="/new">
            ストーリーを書いてみる
            <Icon name="arrow right" />
          </Button>
        </Container>
      </Segment>

      {isError ? (
        <Message negative>
          現在エラーが発生しています。しばらくお待ち下さいmm
        </Message>
      ) : (
        <>{loaded ? <StroyList data={data} /> : <Spinner />}</>
      )}
    </>
  );
};

export default Home;
