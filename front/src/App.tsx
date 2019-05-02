import React from 'react';
import './App.css';
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
  ];

  return (
    <div className="container">
      <header>
        <h1>back story</h1>
      </header>
      <main>
        <StroyList stories={stories} />
      </main>
    </div>
  );
};

export default App;
