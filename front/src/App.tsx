import React, { FC } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Menu, Button, Container } from 'semantic-ui-react';
import Home from './components/Home';
import About from './components/About';
import StoryForm from './components/Form';
import Stories from './components/Stories';

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

    <Switch>
      <Route path="/stories" component={Stories} />
      <Route path="/new" component={StoryForm} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
      <Redirect to="/" />;
    </Switch>
  </>
);

export default App;
