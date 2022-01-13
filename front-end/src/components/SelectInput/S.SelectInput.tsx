import styled from "styled-components";

class Styled {

  Select = styled.select`
    height: 30px;
    width: 50%;
    text-align: center;
    font-size: large;
  `;

  Label = styled.label`
    width: 100%;
  `;

  Div = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    aling-items: center;
    // background-color: blue;
  `;

}

export default new Styled();
