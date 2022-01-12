import React, { useState } from 'react';
import AppContext from './AppContext';
import { DEFAULT_STATE } from './AppContext';

const Provider: React.FC = ({ children }) => {
  const [todo, setTodo] = useState<ITodo>(DEFAULT_STATE.todo);
  const [todos, setTodos] = useState<[] | ITodoRegistred[]>(DEFAULT_STATE.todos);

  const contextValue = {
    todo,
    setTodo,
    todos,
    setTodos,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  )
}

export default Provider;
