import React from 'react';
import Styled from './S.Container';

const Container: React.FC = ({ children }) => {
  return (
    <Styled.Main>
      { children }
    </Styled.Main>
  );
}

export default Container;
