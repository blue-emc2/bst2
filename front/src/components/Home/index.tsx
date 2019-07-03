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
import styled from 'styled-components';
import StroyList from '../../containers/StoryList';
import Spinner from '../Spinner';
import { StoriesIndexApi } from '../../containers/StoriesIndexApi';
import { Datum } from '../../types/StoriesIndexApiProps';

import background from '../../image/home.png';

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

const SummarySegment = styled(Segment)`
  min-height: 500px;
  padding: 1em 0em;
`;

const Home: FC<{}> = () => {
  const { loaded, data, isError } = useFetchStoriesIndex();

  return (
    <>
      <SummarySegment textAlign="center" vertical>
        <Header size="large">
          このサイトは光の戦士たちが光の戦士になる前の物語(妄想)を投稿できるサイトです
        </Header>
        <Button primary size="huge" as={Link} to="/new">
          ストーリーを書いてみる
          <Icon name="arrow right" />
        </Button>
      </SummarySegment>

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
