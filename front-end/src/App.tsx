import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodosList from './pages/TodosList';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ TodosList } />
    </Switch>
  );
}

export default App;
