import { createContext } from 'react';

export const newTodoInitialState = {
  order: 0,
  todo: '',
  priority: 'low',
  isDone: false,
};

export const DEFAULT_STATE = {
  todo: newTodoInitialState,
  setTodo: () => {},
  todos: [],
  setTodos: () => {},
};

const AppContext = createContext<IAppContext>(DEFAULT_STATE);

export default AppContext;
