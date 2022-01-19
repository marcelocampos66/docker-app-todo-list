import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../components/Container';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodosList: React.FC = () => {
  const history = useHistory();

  const verifyIfAlreadyLogged = () => {
    const user: string | null = localStorage.getItem('user');
    if (!user) {
      history.push('/');
    }
  };

  useEffect(() => {
    verifyIfAlreadyLogged();
  }, []);

  return (
    <Container>
      <h1>To Do List</h1>
      <TodoForm />
      <TodoList />
    </Container>
  );
}

export default TodosList;
