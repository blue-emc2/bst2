import React, { FC } from 'react';
import { Card } from 'semantic-ui-react';

export interface Story {
  id: number;
  header: string;
  description: string;
}

interface StoryListProps {
  stories: Story[];
}

const StoryList: FC<StoryListProps> = ({ stories }) => (
  <>
    <Card.Group>
      {stories.map(s => (
        <Card
          key={s.id}
          header={s.header}
          description={s.description}
          image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        />
      ))}
    </Card.Group>
  </>
);

export default StoryList;
