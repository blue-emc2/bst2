import React, { FC } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import TextOnly from '../components/Preview/TextOnly';
import HalfSection from '../components/Preview/HalfSection';
import { Section, TextPosition, SectionListProps } from '../types/LayoutProps';

const SectionList: FC<SectionListProps> = ({ sections }) => {
  const list = sections.map((s: Section, index: number) => {
    switch (s.textPosition) {
      case TextPosition.CENTER: {
        return (
          <TextOnly
            text={s.text}
            key={index.toString()}
            data-cy={`preview${index}`}
          />
        );
      }
      case TextPosition.LEFT: {
        return (
          <HalfSection
            textPosition={TextPosition.LEFT}
            text={s.text}
            key={index.toString()}
            image={s.image}
            imageUrl={s.imageUrl}
          />
        );
      }
      case TextPosition.RIGHT: {
        return (
          <HalfSection
            textPosition={TextPosition.RIGHT}
            text={s.text}
            key={index.toString()}
            image={s.image}
            imageUrl={s.imageUrl}
          />
        );
      }
      default:
        throw new Error(`予期しないtypeです ->${s.textPosition}`);
    }
  });

  return (
    <Container>
      <Grid>
        <Grid.Row>{list}</Grid.Row>
      </Grid>
    </Container>
  );
};

export default SectionList;
