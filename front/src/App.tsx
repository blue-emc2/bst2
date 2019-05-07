import React, { FC } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form';

const App: FC<{}> = () => (
  <div className="container">
    <Switch>
      <Route path="/new" component={Form} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
      <Redirect to="/" />;
    </Switch>
  </div>
);

export default App;
