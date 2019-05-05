import React from 'react';
import './App.css';
import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
  Menu,
  List,
} from 'semantic-ui-react';
import StroyList, { Story } from './components/StoryList';

const App: React.FC = () => {
  const a = Array.from(Array(13).keys());
  const stories = a.map(
    (n: number): Story => ({
      id: n,
      header: 'Matthew',
      meta: 'author',
      description: 'Matthew is a musician living in Nashville.',
    }),
  );

  return (
    <div className="container">
      <main>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 400, padding: '1em 0em' }}
          vertical
        >
          <Menu size="large">
            <Container>
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a">Log in</Button>
              </Menu.Item>
            </Container>
          </Menu>
          <Container text>
            <Header as="h1" inverted content="back story" />
            <Button primary size="huge">
              ストーリーを書いてみる
              <Icon name="arrow right" />
            </Button>
          </Container>
        </Segment>

        <StroyList stories={stories} />

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">権利</List.Item>
              <List.Item as="a">作成者</List.Item>
              <List.Item as="a">問い合わせ</List.Item>
            </List>
          </Container>
        </Segment>
      </main>
    </div>
  );
};

export default App;
