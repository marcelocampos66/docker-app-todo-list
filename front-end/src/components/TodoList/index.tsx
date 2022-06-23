import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import TodoApi from '../../services/TodoApi';
import TodoCard from '../TodoCard';
import Styled from './S.TodoList';

const TodoList: React.FC = () => {
  const { todos, setTodos, setName } = useContext(AppContext);
  const history = useHistory();

  const user: ILocalStorage = JSON.parse(localStorage.getItem('user')!);

  const getTodos = async () => {
    const response: { name: string, todos: ITodoRegistred[] | [], message?: string } =
      await TodoApi.getTodos(user.token);
    if (response.message) {
      localStorage.removeItem('user');
      history.push('/');
      return;
    }
    setName(response.name);
    const ordenedTodos: ITodoRegistred[] | []  = [...response.todos]
      .sort((a, b) => a.order - b.order);
    setTodos(ordenedTodos);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Styled.Section>
      {
        todos.map((todo, index) => (
          <TodoCard
            key={ todo._id }
            todo={ todo }
            todoIndex={ index + 1 }
            token={ user.token }
          />
        ))
      }
    </Styled.Section>
  );
}

export default TodoList;
