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
import HeaderMenu from '../HeaderMenu';

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

const SummaryHeader = styled(Header)`
  &&& {
    font-weight: normal;
    margin-bottom: 0px;
    margin-top: 3em;
  }
`;

const Home: FC<{}> = () => {
  const { loaded, data, isError } = useFetchStoriesIndex();

  return (
    <>
      <HeaderMenu />
      <SummarySegment textAlign="center" vertical>
        <Container text>
          <SummaryHeader as="h1" size="large">
            bst2は光の戦士たちが光の戦士になる前の
            <br />
            生い立ちを投稿・共有ができるサイトです
          </SummaryHeader>
          <Button primary size="huge" as={Link} to="/new">
            ストーリーを書いてみる
            <Icon name="arrow right" />
          </Button>
        </Container>
      </SummarySegment>

      {isError ? (
        <Message negative>
          現在エラーが発生しています。しばらくお待ち下さいmm
        </Message>
      ) : (
        <Segment basic>
          {loaded ? <StroyList data={data} /> : <Spinner />}
        </Segment>
      )}
    </>
  );
};

export default Home;
