import React from 'react';
import Styled from './S.TextInput';

interface IProps {
  type: string;
  name: string;
  labelText: string;
  placeholder: string;
  value: string;
  handleChange: onChange;
}

const TextInput: React.FC<IProps> = ({
  type,
  name,
  labelText,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <Styled.Div>
      <Styled.Label>
        { labelText }
        <Styled.Input
          type={ type }
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
