import React, { FC } from 'react';
import { Container, Header, Image, Grid } from 'semantic-ui-react';

const LeftImage = () => (
  <Image
    floated="left"
    size="large"
    src="https://react.semantic-ui.com/images/wireframe/image.png"
  />
);

const RightImage = () => (
  <Image
    floated="right"
    size="big"
    src="https://react.semantic-ui.com/images/wireframe/image.png"
  />
);

const Preview: FC<{}> = () => {
  return (
    <>
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1">Sticky Example</Header>
      </Container>

      <Container text>
        <Header as="h1">Sticky Example</Header>
      </Container>

      <Container>
        <Grid>
          <Grid.Row>
            <Container text>text only</Container>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={8}>
              <Container text>
                <p>left text</p>
              </Container>
            </Grid.Column>
            <Grid.Column width={8}>
              <RightImage />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={8}>
              <LeftImage />
            </Grid.Column>
            <Grid.Column width={8}>
              <Container text>
                <p>right text</p>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default Preview;
