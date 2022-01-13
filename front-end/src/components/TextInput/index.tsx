import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Styled from './S.TextInput';

interface IProps {
  name: string;
  labelText: string;
  placeholder: string;
  value: string;
}

const TextInput: React.FC<IProps> = ({
  name,
  labelText,
  placeholder,
  value,
}) => {
  const { todo, setTodo } = useContext(AppContext);

  const handleChange: onChange = ({ target: { name, value } }) => {
    setTodo({ ...todo, [name]: value });
  }

  return (
    <Styled.Div>
      <Styled.Label>
        { labelText }
        <Styled.Input
          type="text"
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)
          }
          placeholder={ placeholder }
          name={ name }
          value={ value }
        />
      </Styled.Label>
    </Styled.Div>
  );
}

export default TextInput;
