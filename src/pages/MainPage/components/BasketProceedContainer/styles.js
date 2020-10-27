import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 3;
  margin-left: 35px;

  @media (max-width: 901px) {
    margin-top: 50px;
    margin-left: 0px;
  }
`;

export const Container = styled.div``;

export const Button = styled.button`
  margin: 23px 0;
  background-color: black;
  color: white;
  font-size: 14px;
  padding: 7px 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
