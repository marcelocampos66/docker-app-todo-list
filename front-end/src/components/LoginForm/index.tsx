import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import TextInput from '../TextInputLogin';
import Button from '../Button';
import PopUpMessage from '../PopUpMessage';
import Helpers from '../../helpers/Helpers';
import UsersApi from '../../services/UsersApi';
import Styled from './S.LoginForm';

const LoginForm: React.FC = () => {
  const {
    login,
    setLogin,
    errorMessage,
    setErrorMessage,
  } = useContext(AppContext);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const handleClick = async () => {
    const { token }: { token: string | undefined } =
      await UsersApi.login(login);
    if (!token) {
      setErrorMessage('Invalid email or password');
      return;
    }
    const localStorageData = { token };
    localStorage.setItem('user', JSON.stringify(localStorageData));
    history.push('/todos');
  }

  const handleChange: onChange = ({ target: { name, value } }) => {
    setLogin({ ...login, [name]: value });
  }

  const validateInfos = () => {
    const isValid: boolean = Helpers.validateLoginCredentials(login);
    setDisabled(isValid);
  }

  useEffect(() => {
    validateInfos();
  }, [login]);

  return (
    <Styled.Section>
      { errorMessage && <PopUpMessage /> }
      <Styled.H1>Login</Styled.H1>
      <TextInput
        type="text"
        name="email"
        labelText="Email: "
        placeholder="example@email.com"
        value={ login['email'] }
        handleChange={ handleChange }
        maxLength={ undefined }
      />
      <TextInput
        type="password"
        name="password"
        labelText="Password: "
        placeholder="********"
        value={ login['password'] }
        handleChange={ handleChange }
        maxLength={ undefined }
      />
      <Button
        buttonText="Login"
        disabled={ disabled }
        handleClick={ handleClick }
      />
      <Styled.Div>
        <Styled.P>
          Not a member yet? Register <Link to="/register">here</Link>!
        </Styled.P>
      </Styled.Div>
    </Styled.Section>
  );
}

export default LoginForm;
