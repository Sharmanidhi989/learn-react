import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from "./components/shared/Header";
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
       <Switch>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
    </Fragment>
  );
}

export default App;
