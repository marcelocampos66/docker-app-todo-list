import styled from "styled-components";

class Styled {

  Div = styled.div`
    width: 30%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
  `;

  Button = styled.button`
    width: 20%;
    border-radius: 5px;
    margin: 1% 0;
  `;

  P = styled.p``;

}

export default new Styled();
