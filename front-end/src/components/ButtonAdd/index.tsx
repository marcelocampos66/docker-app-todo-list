import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import TodoApi from '../../services/TodoApi';
import { newTodoInitialState } from '../../context/AppContext';
import Styled from './S.ButtonAdd';

const ButtonAdd: React.FC = () => {
  const { todo, setTodo, todos } = useContext(AppContext);

  const setOrder = () => {
    if (todos.length === 0) {
      return ({ ...todo, order: todos.length + 1 });
    }
    const lastTodo = todos[todos.length - 1];
    return ({ ...todo, order: lastTodo.order + 1 });
  }

  const handleClick = async () => {
    const currentTodo = setOrder();
    await TodoApi.saveTodo(currentTodo);
    setTodo(newTodoInitialState);
  }

  return (
    <Styled.Button
      type="button"
      onClick={ () => handleClick() }
    >
      Add
    </Styled.Button>
  );
}

export default ButtonAdd;
