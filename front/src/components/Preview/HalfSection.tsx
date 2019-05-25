import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import { LayoutType } from '../../containers/SectionList';

const HalfSection = (props: { textPosition: LayoutType; text: string }) => {
  const { textPosition, text } = props;

  let left;
  let right;
  if (textPosition === LayoutType.LeftText) {
    left = <Container text>{text}</Container>;
    right = (
      <Image
        floated="left"
        size="large"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />
    );
  } else {
    right = <Container text>{text}</Container>;
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
