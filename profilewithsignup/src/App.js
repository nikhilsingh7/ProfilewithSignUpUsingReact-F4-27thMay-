import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Redirect to="/signup" />
      </Switch>
    </Router>
  );
}

export default App;
