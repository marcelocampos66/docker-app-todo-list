import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../components/Container';
import Header from '../components/Header';
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
      <Header />
      <TodoForm />
      <TodoList />
    </Container>
  );
}

export default TodosList;
