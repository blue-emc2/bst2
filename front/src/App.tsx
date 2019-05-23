import React, { FC } from 'react';
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
import Stories from './components/Stories';
import Preview from './components/Preview';

const App: FC<{}> = () => (
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
        <Route path="/stories" component={Stories} />
        <Route path="/new" component={StoryForm} />
        <Route path="/about" component={About} />
        <Route path="/preview" component={Preview} />
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

export default App;
