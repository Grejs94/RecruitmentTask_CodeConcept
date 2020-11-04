import styled from "styled-components";

export const Wrapper = styled.div`
  width: 240px;
  margin: 0;
  padding: 0 30px 0 15px;
  background-color: yellow;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    margin: 30px 0;
    padding: 0 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default {
  Wrapper,
  ButtonWrapper,
};
