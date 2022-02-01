import React from 'react';
import Styled from './S.Button';

interface IProps {
  buttonText: string;
  handleClick: () => Promise<void>;
  disabled: boolean;
}

const Button: React.FC<IProps> = ({
  buttonText,
  handleClick,
  disabled,
}) => {
  return (
    <Styled.Button
      type="button"
      disabled={ disabled }
      onClick={ () => handleClick() }
    >
      { buttonText }
    </Styled.Button>
  );
}

export default Button;
