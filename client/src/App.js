import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from './pages/index';
import Sports from './pages/sports';
import Profile from './pages/profile';

const App = () => {
  return (
      <Router>
          <Route exact path="/" component={Index} />
          <Route exact path="/oursports" component={Sports} />
          <Route exact path="/profile" component={Profile} />

      </Router>
  )
}

export default App;