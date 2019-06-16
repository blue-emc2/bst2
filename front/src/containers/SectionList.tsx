import React, { FC } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import TextOnly from '../components/Preview/TextOnly';
import HalfSection from '../components/Preview/HalfSection';
import { LayoutType, SectionListProp } from '../App';
import { SectionForLayout } from '../types/ApiProps';

const SectionList: FC<SectionListProp> = ({ sections = [] }) => {
  const list = sections.map((s: SectionForLayout, index: number) => {
    switch (s.layoutType) {
      case LayoutType.Text:
      case 'Text': {
        return (
          <TextOnly
            text={s.body}
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
            text={s.body}
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
            text={s.body}
            key={index.toString()}
            data-cy={`preview${index}`}
          />
        );
      }
      default:
        throw new Error(`予期しないtypeです ->${s.layoutType}`);
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
