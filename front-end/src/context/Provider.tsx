import React, { useState } from 'react';
import AppContext from './AppContext';
import { DEFAULT_STATE } from './AppContext';

const Provider: React.FC = ({ children }) => {
  const [todo, setTodo] = useState<ITodo>(DEFAULT_STATE.todo);
  const [todos, setTodos] =
    useState<[] | ITodoRegistred[]>(DEFAULT_STATE.todos);
  const [register, setRegister] =
    useState<IRegister>(DEFAULT_STATE.register);
  const [login, setLogin] = useState<ILogin>(DEFAULT_STATE.login);
  const [name, setName] = useState<string>(DEFAULT_STATE.name);

  const contextValue = {
    todo,
    setTodo,
    todos,
    setTodos,
    register,
    setRegister,
    login,
    setLogin,
    name,
    setName,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  )
}

export default Provider;
