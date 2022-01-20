import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import TodoApi from '../../services/TodoApi';
import Styled from './S.TodoCard';

interface IProps {
  todo: ITodoRegistred;
  todoIndex: number;
  token: string;
}

const TodoCard: React.FC<IProps> = ({ todo, todoIndex, token }) => {
  const { setTodos } = useContext(AppContext);

  const deleteTodo = async () => {
    await TodoApi.deleteTodo(todo._id, token);
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
    const response: { name: string, todos: ITodoRegistred[] | [] } =
      await TodoApi.getTodos(token);
    setTodos(response.todos);
  }

  return (
    <Styled.Div>
      <Styled.DivInfos>
        <Styled.DivOrder>
          <Styled.P>{ todoIndex }</Styled.P>
        </Styled.DivOrder>
        <Styled.DivTodo>
          <Styled.P>{ todo.todo }</Styled.P>
        </Styled.DivTodo>
        <Styled.DivPriority>
          <Styled.P>{ todo.priority }</Styled.P>
        </Styled.DivPriority>
      </Styled.DivInfos>
      <Styled.DivButtons>
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
      </Styled.DivButtons>
    </Styled.Div>
  );
}

export default TodoCard;
