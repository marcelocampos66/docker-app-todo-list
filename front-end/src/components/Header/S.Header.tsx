import styled from "styled-components";

class Styled {

  Header = styled.header`
    width: 100%;
    height: 9vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  DivHeader = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  DivUserInfos = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  H1 = styled.h1``;

  H3 = styled.h3``;

  Button = styled.button`
    width: 30%;
    height: 40%;
  `;

}

export default new Styled();
