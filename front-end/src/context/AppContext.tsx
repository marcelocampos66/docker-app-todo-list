import { createContext } from 'react';

export const newTodoInitialState = {
  order: 0,
  todo: '',
  priority: 'low',
  isDone: false,
};

export const registerInitialState = {
  name: '',
  email: '',
  password: '',
  birthDate: '',
}

export const loginInitialState = {
  email: '',
  password: '',
}

export const DEFAULT_STATE = {
  todo: newTodoInitialState,
  setTodo: () => {},
  todos: [],
  setTodos: () => {},
  register: registerInitialState,
  setRegister: () => {},
  login: loginInitialState,
  setLogin: () => {},
  name: '',
  setName: () => {},
  errorMessage: '',
  setErrorMessage: () => {},
};

const AppContext = createContext<IAppContext>(DEFAULT_STATE);

AppContext.displayName='App Context';

export default AppContext;
