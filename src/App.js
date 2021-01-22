import React, {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'

import Navbar from './components/Navbar'

const App = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
