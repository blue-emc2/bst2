import React from 'react';
import './App.css';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import StroyList, { Story } from './components/StoryList';

const App: React.FC = () => {
  const stories: Story[] = [
    {
      id: 1,
      header: 'Matthew',
      description: 'Matthew is a musician living in Nashville.',
    },
    {
      id: 2,
      header: 'Matthew',
      description: 'Matthew is a musician living in Nashville.',
    },
    {
      id: 3,
      header: 'Matthew',
      description: 'Matthew is a musician living in Nashville.',
    },
    {
      id: 4,
      header: 'Matthew',
      description: 'Matthew is a musician living in Nashville.',
    },
  ];

  return (
    <div className="container">
      <main>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 400, padding: '1em 0em' }}
          vertical
        >
          <Container text>
            <Header as="h1" inverted content="back story" />
            <Button primary size="huge">
              ストーリーを書いてみる
              <Icon name="arrow right" />
            </Button>
          </Container>
        </Segment>

        <StroyList stories={stories} />
      </main>
    </div>
  );
};

export default App;
