import React, { useContext } from 'react';
import AppContext, { newTodoInitialState } from '../../context/AppContext';
import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import Button from '../Button';
import TodoApi from '../../services/TodoApi';
import Styled from './S.TodoForm';

const TodoForm: React.FC = () => {
  const { todo, setTodo, todos, setTodos } = useContext(AppContext);

  const setOrder = () => {
    if (todos.length === 0) {
      return ({ ...todo, order: todos.length + 1 });
    }
    const lastTodo = todos[todos.length - 1];
    return ({ ...todo, order: lastTodo.order + 1 });
  }

  const updateList = async (token: string) => {
    const updatedTodos = await TodoApi.getTodos(token);
    setTodos(updatedTodos);
  }

  const handleClick = async () => {
    const currentTodo = setOrder();
    const user: ILocalStorage = JSON.parse(localStorage.getItem('user')!);
    await TodoApi.saveTodo(currentTodo, user.token);
    setTodo(newTodoInitialState);
    await updateList(user.token);
  }

  const handleChange: onChange = ({ target: { name, value } }) => {
    setTodo({ ...todo, [name]: value });
  }

  return (
    <Styled.Section>
      <TextInput
        type="text"
        name="todo"
        labelText="Type your todo: "
        placeholder=""
        value={ todo['todo'] }
        handleChange={ handleChange }
      />
      <SelectInput
        name="priority"
        labelText="Select todo priority: "
        options={ ['low', 'medium', 'high'] }
        value={ todo['priority'] }
      />
      <Button
        buttonText="Add"
        disabled={ false }
        handleClick={ handleClick }
      />
    </Styled.Section>
  );
}

export default TodoForm;
