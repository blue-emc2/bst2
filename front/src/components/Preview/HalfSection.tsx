import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import { TextPosition } from '../../types/LayoutProps';

const HalfSection = ({ ...props }) => {
  const { textPosition, text, imageUrl } = props;

  let left;
  let right;
  if (textPosition === TextPosition.LEFT) {
    left = (
      <Container data-cy="previewLeftText">
        <p>{text}</p>
      </Container>
    );
    right = <Image floated="left" size="large" src={imageUrl} />;
  } else {
    right = (
      <Container data-cy="previewRightText">
        <p>{text}</p>
      </Container>
    );
    left = <Image floated="right" size="large" src={imageUrl} />;
  }

  return (
    <Grid>
      <Grid.Column width={8}>{left}</Grid.Column>
      <Grid.Column width={8}>{right}</Grid.Column>
    </Grid>
  );
};

export default HalfSection;
