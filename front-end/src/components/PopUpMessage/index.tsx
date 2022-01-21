import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Styled from './S.PopUpMessage';

const PopUpMessage: React.FC = () => {
  const { errorMessage, setErrorMessage } = useContext(AppContext);

  return (
    <Styled.Div>
      <Styled.P>
        { errorMessage }
      </Styled.P>
      <Styled.Button
        type="button"
        onClick={ () => setErrorMessage('') }
      >
        Ok
      </Styled.Button>
    </Styled.Div>
  );
}

export default PopUpMessage;
