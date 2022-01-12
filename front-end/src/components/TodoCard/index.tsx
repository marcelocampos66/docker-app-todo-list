import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import TodoApi from '../../services/TodoApi';
import Styled from './S.TodoCard';

interface IProps {
  todo: ITodoRegistred;
  todoIndex: number;
}

const TodoCard: React.FC<IProps> = ({ todo, todoIndex }) => {
  const { setTodos } = useContext(AppContext);

  const deleteTodo = async () => {
    await TodoApi.deleteTodo(todo._id);
    await updateList();
  }

  const updateTodo = async () => {
    const { _id, ...others } = todo;
    const { isDone } = others;
    others.isDone = !isDone;
    await TodoApi.updateTodoStatus(todo._id, others);
    await updateList();
  }

  const updateList = async () => {
    const updatedTodos = await TodoApi.getTodos();
    setTodos(updatedTodos);
  }

  return (
    <Styled.Div>
      <Styled.P>{ todoIndex }</Styled.P>
      <Styled.P>{ todo.todo }</Styled.P>
      <Styled.P>{ todo.priority }</Styled.P>
      <Styled.P>{ todo.isDone }</Styled.P>
      <Styled.Button
        type="button"
        onClick={ () => updateTodo() }
      >
        { todo.isDone ? 'Done' : 'Pending' }
      </Styled.Button>
      <Styled.Button
        type="button"
        onClick={ () => deleteTodo() }
      >
        X
      </Styled.Button>
    </Styled.Div>
  );
}

export default TodoCard;
