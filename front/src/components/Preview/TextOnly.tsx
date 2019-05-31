import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

const TextOnly = (props: { text: string }) => {
  const { text } = props;

  return (
    <Grid.Column width={16}>
      <Container {...props} text>
        {text}
      </Container>
    </Grid.Column>
  );
};

export default TextOnly;
