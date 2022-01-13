import styled from "styled-components";

class Styled {

  Input = styled.input`
    height: 30px;
    width: 70%;
    border-radius: 10px;
  `;

  Label = styled.label`
    width: 100%;
  `;

  Div = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    aling-items: center;
  `;

}

export default new Styled();
