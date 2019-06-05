import React, { FC, useState } from 'react';
import './App.css';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import {
  Menu,
  Button,
  Container,
  Segment,
  Header,
  List,
} from 'semantic-ui-react';
import Home from './components/Home';
import About from './components/About';
import StoryForm from './components/Form';
import Preview from './components/Preview';
import Story from './components/Story';
import { Section } from './types/ApiProps';

// ---------------------------------------
// 共通interface定義
// 本当は型定義ファイルが良いのだろうが
// 作るのがめんどくさそうなのでここに定義する
export enum LayoutType {
  Text,
  LeftText,
  RightText,
}

export interface LayoutProps extends SectionListProp {
  charactername: string;
  username: string;
}

export interface SectionListProp {
  sections: Section[];
}

// ---------------------------------------

const App: FC<{}> = () => {
  const initialValue = {
    charactername: '',
    username: '',
    sections: [
      {
        id: 1,
        layoutType: LayoutType.Text,
        body: '',
      },
    ],
  };
  const [layout, setLayout] = useState<LayoutProps>(initialValue);

  const handleOnSubmit = ({
    charactername,
    username,
    sections,
  }: LayoutProps) => {
    setLayout({
      charactername,
      username,
      sections,
    });
  };

  return (
    <>
      <Menu fixed="top" size="large">
        <Container>
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item position="right">
            <Button as="a">Log in</Button>
          </Menu.Item>
        </Container>
      </Menu>

      <main>
        <Switch>
          <Route
            path="/new"
            render={() => <StoryForm onPreview={handleOnSubmit} />}
          />
          <Route path="/about" component={About} />
          <Route path="/preview" render={() => <Preview {...layout} />} />
          <Route path="/story/:id" component={Story} />
          <Route path="/" component={Home} />
          <Redirect to="/" />;
        </Switch>
      </main>

      <footer>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item>
                <Link to="/about">bstとは</Link>
              </List.Item>
              <List.Item as="a">作者</List.Item>
              <List.Item as="a">問い合わせ</List.Item>
            </List>
          </Container>
        </Segment>
      </footer>
    </>
  );
};

export default App;
