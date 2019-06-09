import React, { FC, SyntheticEvent, useState } from 'react';
import { Image, Card, Pagination, PaginationProps } from 'semantic-ui-react';
import { StroiesIndexAPIProps } from '../types/StoriesIndexApiProps';

const PER_PAGE_CARD_MAX_COUNT = 6;

const StoryList: FC<StroiesIndexAPIProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const begin = (currentPage - 1) * PER_PAGE_CARD_MAX_COUNT;
  const end = currentPage * PER_PAGE_CARD_MAX_COUNT;
  const handlePaginationChange = (
    e: SyntheticEvent,
    pageData: PaginationProps,
  ) => {
    const page: number =
      (pageData.activePage !== null && (pageData.activePage as number)) || 0;
    setCurrentPage(page);
  };

  return (
    <>
      <Card.Group>
        {data.slice(begin, end).map((s, index) => (
          <Card key={s ? s.id : '0'} href="/stories">
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header data-cy={`story_card_header${index}`}>
                {s ? s.attributes.characterName : '???'}
              </Card.Header>
              <Card.Meta data-cy={`story_card_meta${index}`}>
                {s ? s.attributes.userName : '???'}
              </Card.Meta>
              <Card.Description data-cy={`story_card_desc${index}`}>
                {s ? s.attributes.body : '???'}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={Math.ceil(data.length / PER_PAGE_CARD_MAX_COUNT)}
        onPageChange={handlePaginationChange}
      />
    </>
  );
};

export default StoryList;
