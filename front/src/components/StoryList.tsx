import React, { FC, SyntheticEvent, useState } from 'react';
import { Card, Pagination, PaginationProps } from 'semantic-ui-react';

export interface Story {
  id: number;
  header: string;
  description: string;
  meta?: string;
}

interface StoryListProps {
  stories: Story[];
}

const PER_PAGE_CARD_MAX_COUNT = 6;

const StoryList: FC<StoryListProps> = ({ stories }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const begin = (currentPage - 1) * PER_PAGE_CARD_MAX_COUNT;
  const end = currentPage * PER_PAGE_CARD_MAX_COUNT;
  const handlePaginationChange = (e: SyntheticEvent, data: PaginationProps) => {
    const page: number =
      (data.activePage !== null && (data.activePage as number)) || 0;
    setCurrentPage(page);
  };

  return (
    <>
      <Card.Group>
        {stories.slice(begin, end).map(s => (
          <Card
            key={s.id}
            header={s.header}
            description={s.description}
            meta={s.meta ? s.meta : '???'}
            image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          />
        ))}
      </Card.Group>
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={Math.ceil(stories.length / PER_PAGE_CARD_MAX_COUNT)}
        onPageChange={handlePaginationChange}
      />
    </>
  );
};

export default StoryList;
