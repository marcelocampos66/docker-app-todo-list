import styled from "styled-components";

class Styled {

  Div = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 5vh;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px 0;
  `;

  DivInfos = styled.div`
    width: 68%;
    height: 100%;
    display: flex;
    align-items: center;
  `;

  DivTodo = styled.div`
    width: 80%;
  `;

  DivOrder = styled.div`
    width: 5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  DivPriority = styled.div`
    width: 5%;
    height: 100%;
  `;

  DivButtons = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  P = styled.p``;

  Button = styled.button`
    width: 40%;
    height: 60%;
  `;

}

export default new Styled();
