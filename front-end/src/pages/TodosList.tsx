import React from 'react';
import Container from '../components/Container';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodosList: React.FC = () => {
  return (
    <Container>
      <h1>Todos</h1>
      <TodoForm />
      <TodoList />
    </Container>
  );
}

export default TodosList;
