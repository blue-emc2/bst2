import React, { FC } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import TextOnly from '../components/Preview/TextOnly';
import HalfSection from '../components/Preview/HalfSection';
import { LayoutType, SectionListProp, SectionProps } from '../App';

const SectionList: FC<SectionListProp> = ({ sections = [] }) => {
  const list = sections.map((s: SectionProps, index: number) => {
    switch (s.type) {
      case LayoutType.Text:
      case 'Text': {
        return (
          <TextOnly
            text={s.text}
            key={index.toString()}
            data-cy={`preview${index}`}
          />
        );
      }
      case LayoutType.LeftText:
      case 'LeftText': {
        return (
          <HalfSection
            textPosition={LayoutType.LeftText}
            text={s.text}
            key={index.toString()}
            data-cy={`preview${index}`}
          />
        );
      }
      case LayoutType.RightText:
      case 'RightText': {
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
        throw new Error(`予期しないtypeです ->${s.type}`);
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
