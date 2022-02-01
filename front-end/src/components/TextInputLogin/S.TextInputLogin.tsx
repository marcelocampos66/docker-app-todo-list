import styled from "styled-components";

class Styled {

  Input = styled.input`
    height: 30px;
    width: 100%;
    border-radius: 10px;
  `;

  Label = styled.label`
    width: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  `;

  Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1% 0;
  `;

}

export default new Styled();
