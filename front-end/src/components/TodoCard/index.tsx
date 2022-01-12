import React from 'react';
import Styled from './S.TodoCard';

interface IProps {
  todo: ITodoRegistred;
}

const TodoCard: React.FC<IProps> = ({ todo }) => {
  return (
    <Styled.Div>
      <Styled.P>{ todo.order }</Styled.P>
      <Styled.P>{ todo.todo }</Styled.P>
      <Styled.P>{ todo.priority }</Styled.P>
      <Styled.P>{ todo.isDone }</Styled.P>
      <Styled.Button
        type="button"
        onClick={ () => {} }
      >
        { todo.isDone ? 'Done' : 'Undone' }
      </Styled.Button>
      <Styled.Button
        type="button"
        onClick={ () => {} }
      >
        X
      </Styled.Button>
    </Styled.Div>
  );
}

export default TodoCard;
