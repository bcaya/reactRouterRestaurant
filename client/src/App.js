import React, { Component } from 'react';
import Home from './components/Home'; 
import About from './components/About'; 
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NoMatch from './components/NoMatch'; 
import Menu from './components/Menu';

const App = () => ( 
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} /> 
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/menu_items/:id" component={Menu}/>
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
