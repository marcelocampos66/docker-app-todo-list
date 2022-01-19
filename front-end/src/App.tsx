import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodosList from './pages/TodosList';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route path="/todos" component={ TodosList } />
      <Route path="/register" component={ Register } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
