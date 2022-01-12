import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Styled from './S.SelectInput';

interface IProps {
  name: string;
  labelText: string;
  options: string[];
  value: string;
}

const SelectInput: React.FC<IProps> = ({
  name,
  labelText,
  options,
  value,
}) => {
  const { todo, setTodo } = useContext(AppContext);
  
  const handleChange: onChangeDropDown = ({ target: { name, value } }) => {
    setTodo({ ...todo, [name]: value });
  }

  return (
    <Styled.Label>
      { labelText }
      <Styled.Input
        name={ name }
        onChange={
          (e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)
        }
        value={ value }
      >
        { options.map((option) => (
          <option key={ option }>{ option }</option>
        )) }
      </Styled.Input>
    </Styled.Label>
  );
}

export default SelectInput;
