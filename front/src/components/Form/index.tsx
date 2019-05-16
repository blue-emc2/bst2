import React, { FC } from 'react';
import { Form, Container, Grid, Image } from 'semantic-ui-react';

const StoryForm: FC<{}> = () => {
  return (
    <Container style={{ marginTop: '7em' }}>
      <Form>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Form.Field>
                <input />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Container>
  );
};

export default StoryForm;
