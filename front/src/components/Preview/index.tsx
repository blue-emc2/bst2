import React, { FC } from 'react';
import { Container, Header } from 'semantic-ui-react';
import SectionList from '../../containers/SectionList';

const Preview: FC<{}> = () => {
  return (
    <>
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1">Sticky Example</Header>
      </Container>

      <Container text>
        <Header as="h1">Sticky Example</Header>
      </Container>

      <SectionList />
    </>
  );
};

export default Preview;
