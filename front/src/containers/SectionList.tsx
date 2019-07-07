import React, { FC } from 'react';
import { Container } from 'semantic-ui-react';
import HalfSection from '../components/Story/HalfSection';
import { Section, TextPosition, SectionListProps } from '../types/LayoutProps';
import TextOnly from '../components/Story/TextOnly';

const SectionList: FC<SectionListProps> = ({ sections }) => {
  const list = sections.map((s: Section, index: number) => {
    switch (s.textPosition) {
      case TextPosition.CENTER: {
        return <TextOnly text={s.body} key={index.toString()} />;
      }
      case TextPosition.LEFT: {
        return (
          <HalfSection
            textPosition={TextPosition.LEFT}
            text={s.body}
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
            text={s.body}
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

  return <Container text>{list}</Container>;
};

export default SectionList;
