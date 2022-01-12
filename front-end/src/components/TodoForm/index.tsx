import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import ButtonAdd from '../ButtonAdd';
import Styled from './S.TodoForm';

const TodoForm: React.FC = () => {
  const { todo } = useContext(AppContext);

  return (
    <Styled.Section>
      <TextInput
        name="todo"
        labelText="Type your todo:"
        placeholder=""
        value={ todo['todo'] }
      />
      <SelectInput
        name="priority"
        labelText="Select todo priority:"
        options={ ['low', 'medium', 'high'] }
        value={ todo['priority'] }
      />
      <ButtonAdd />
    </Styled.Section>
  );
}

export default TodoForm;
