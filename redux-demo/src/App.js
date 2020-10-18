import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/about" component={AboutPage}></Route>
      <Route path="/" exact component={HomePage}></Route>
    </Switch>
  );
}

export default App;
