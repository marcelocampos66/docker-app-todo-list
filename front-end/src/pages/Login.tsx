import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../components/Container';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  const history = useHistory();

  const verifyIfAlreadyLogged = () => {
    const content = localStorage.getItem('user');
    if (content) {
      history.push('/todos');
    }
  };

  useEffect(() => {
    verifyIfAlreadyLogged();
  }, []);

  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

export default Login;
