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

const SummaryContainer = styled(Container)`
  background-color: #fff;
  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
`;

const Home: FC<{}> = () => {
  const { loaded, data, isError } = useFetchStoriesIndex();

  return (
    <>
      <SummaryContainer>
        <Segment textAlign="center" vertical>
          <Header as="h1" content="back story" />
          <Button primary size="huge" as={Link} to="/new">
            ストーリーを書いてみる
            <Icon name="arrow right" />
          </Button>
        </Segment>
      </SummaryContainer>

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
