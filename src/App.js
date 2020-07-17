import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/layout/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
