import React, { FC } from 'react';
import { Container, Header, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { LayoutProps } from '../../App';
import SectionList from '../../containers/SectionList';

const Preview: FC<LayoutProps> = ({ charactername, username, sections }) => {
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
        <Button>
          <Link to="/story/1">公開する</Link>
        </Button>
      </Segment>
    </>
  );
};

export default Preview;
