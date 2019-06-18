import React, { FC } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import TextOnly from '../components/Preview/TextOnly';
import HalfSection from '../components/Preview/HalfSection';
import { LayoutType, SectionListProp } from '../App';
import { Section, TextPosition } from '../types/LayoutProps';

const SectionList: FC<SectionListProp> = ({ sections = [] }) => {
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
            textPosition={LayoutType.LeftText}
            text={s.text}
            key={index.toString()}
            data-cy={`preview${index}`}
          />
        );
      }
      case TextPosition.RIGHT: {
        return (
          <HalfSection
            textPosition={LayoutType.RightText}
            text={s.text}
            key={index.toString()}
            data-cy={`preview${index}`}
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
