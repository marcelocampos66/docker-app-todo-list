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
    <Styled.Div>
      <Styled.Label>
        { labelText }
        <Styled.Select
          name={ name }
          onChange={
            (e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)
          }
          value={ value }
        >
          { options.map((option) => (
            <option key={ option }>{ option }</option>
          )) }
        </Styled.Select>
      </Styled.Label>
    </Styled.Div>
  );
}

export default SelectInput;
