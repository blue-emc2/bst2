import React, { FC } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import TextOnly from '../components/Preview/TextOnly';
import HalfSection from '../components/Preview/HalfSection';
import { LayoutType, SectionListProp, SectionProps } from '../App';

const SectionList: FC<SectionListProp> = ({ sections }) => {
  const list = sections.map((s: SectionProps) => {
    if (s.type === LayoutType.Text) {
      return <TextOnly text={s.text} key={s.id} data-test={`section${s.id}`} />;
    }
    if (s.type === LayoutType.LeftText) {
      return (
        <HalfSection
          textPosition={LayoutType.LeftText}
          text={s.text}
          key={s.id}
          data-test={`section${s.id}`}
        />
      );
    }
    if (s.type === LayoutType.RightText) {
      return (
        <HalfSection
          textPosition={LayoutType.RightText}
          text={s.text}
          key={s.id}
          data-test={`section${s.id}`}
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
