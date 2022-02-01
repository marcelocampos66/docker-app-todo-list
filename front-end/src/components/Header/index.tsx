import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import Styled from './S.Header';

const Header: React.FC = () => {
  const { name } = useContext(AppContext);
  const history = useHistory();

  const handleClick = () => {
    localStorage.removeItem('user');
    history.push('/');
  }

  return (
    <Styled.Header>
      <Styled.DivHeader>
        <Styled.H1>To Do List</Styled.H1>
        <Styled.DivUserInfos>
          <Styled.H3>
            { name === '' ? 'Hello!' : `Hello, ${name}!` }
          </Styled.H3>
          <Styled.Button
            type="button"
            onClick={ () => handleClick() }
          >
            Logout
          </Styled.Button>
        </Styled.DivUserInfos>
      </Styled.DivHeader>
    </Styled.Header>
  );
}

export default Header;
