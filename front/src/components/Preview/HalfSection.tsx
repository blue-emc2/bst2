import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import { TextPosition } from '../../types/LayoutProps';

const HalfSection = ({ ...props }) => {
  const { textPosition, text, imageUrl } = props;

  let left;
  let right;
  if (textPosition === TextPosition.LEFT) {
    left = (
      <Container data-cy="previewLeftText" text>
        {text}
      </Container>
    );
    right = <Image floated="left" size="large" src={imageUrl} />;
  } else {
    right = (
      <Container data-cy="previewRightText" text>
        {text}
      </Container>
    );
    left = (
      <Image
        floated="right"
        size="large"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />
    );
  }

  return (
    <>
      <Grid.Column width={8}>{left}</Grid.Column>
      <Grid.Column width={8}>{right}</Grid.Column>
    </>
  );
};

export default HalfSection;
