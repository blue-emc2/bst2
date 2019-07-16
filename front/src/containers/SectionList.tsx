import React, { FC } from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import HalfSection from '../components/Story/HalfSection';
import { Section, TextPosition, SectionListProps } from '../types/LayoutProps';
import TextOnly from '../components/Story/TextOnly';

const ListContainer = styled(Container)`
  margin-block-end: 2em;
  margin-block-start: 2em;
`;

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

  return <ListContainer text>{list}</ListContainer>;
};

export default SectionList;
