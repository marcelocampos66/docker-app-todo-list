import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import TextInput from '../TextInputLogin';
import Button from '../Button';
import PopUpMessage from '../PopUpMessage';
import Helpers from '../../helpers/Helpers';
import UsersApi from '../../services/UsersApi';
import Styled from './S.RegisterForm';

const RegisterForm: React.FC = () => {
  const {
    register,
    setRegister,
    errorMessage,
    setErrorMessage,
  } = useContext(AppContext);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const handleClick = async () => {
    const newUser = {
      ...register,
      birthDate: Helpers.formatDate(register.birthDate),
    };
    const { message } = await UsersApi.register(newUser);
    if (message) {
      setErrorMessage(message);
      return;
    }
    history.push('/');
  }

  const handleChange: onChange = ({ target: { name, value } }) => {
    setRegister({ ...register, [name]: value });
  }

  const validateInfos = () => {
    const isValid: boolean = Helpers.validateNewUserData(register);
    setDisabled(isValid);
  }

  useEffect(() => {
    validateInfos();
  }, [register]);

  return (
    <Styled.Section>
      { errorMessage && (<PopUpMessage />) }
      <TextInput
        type="text"
        name="name"
        labelText="Name: "
        placeholder=""
        value={ register['name'] }
        handleChange={ handleChange }
        maxLength={ undefined }
      />
      <TextInput
        type="text"
        name="email"
        labelText="Email: "
        placeholder=""
        value={ register['email'] }
        handleChange={ handleChange }
        maxLength={ undefined }
      />
      <TextInput
        type="password"
        name="password"
        labelText="Password: "
        placeholder="********"
        value={ register['password'] }
        handleChange={ handleChange }
        maxLength={ undefined }
      />
      <TextInput
        type="date"
        name="birthDate"
        labelText="Birth Date: "
        placeholder="MM/DD/YYYY"
        value={ register['birthDate'] }
        handleChange={ handleChange }
        maxLength={ 10 }
      />
      <Button
        buttonText="Register"
        disabled={ disabled }
        handleClick={ handleClick }
      />
    </Styled.Section>
  );
}

export default RegisterForm;
