import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import TodoApi from '../../services/TodoApi';
import TodoCard from '../TodoCard';
import Styled from './S.TodoList';

const TodoList: React.FC = () => {
  const { todos, setTodos } = useContext(AppContext);

  const getTodos = async () => {
    const allTodos: ITodoRegistred[] | [] = await TodoApi.getTodos();
    const ordenedTodos = allTodos.sort((a, b) => a.order - b.order);
    setTodos(ordenedTodos);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Styled.Section>
      {
        todos.map((todo) => <TodoCard  key={ todo._id } todo={ todo } />)
      }
    </Styled.Section>
  );
}

export default TodoList;
