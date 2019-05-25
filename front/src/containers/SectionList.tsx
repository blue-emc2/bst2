import React, { FC } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import TextOnly from '../components/Preview/TextOnly';
import HalfSection from '../components/Preview/HalfSection';

export enum LayoutType {
  Text,
  LeftText,
  RightText,
}

export interface Section {
  id: number;
  type: LayoutType;
  text: string;
  image?: string;
}

interface SectionList {
  sections: Section[];
}

const SectionList: FC<SectionList> = ({ sections }) => {
  const list = sections.map((s: Section) => {
    if (s.type === LayoutType.Text) {
      return <TextOnly text={s.text} key={s.id} />;
    }
    if (s.type === LayoutType.LeftText) {
      return (
        <HalfSection
          textPosition={LayoutType.LeftText}
          text={s.text}
          key={s.id}
        />
      );
    }
    if (s.type === LayoutType.RightText) {
      return (
        <HalfSection
          textPosition={LayoutType.RightText}
          text={s.text}
          key={s.id}
        />
      );
    }

    return [];
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
