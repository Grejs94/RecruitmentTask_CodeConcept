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

export const ShippingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid gray;
  background-color: lightgray;
`;

export const BasketSumaryContainer = styled.div`
  border: 1px solid gray;
  margin-top: 20px;
`;

export const SumaryTitle = styled.div`
display: flex;
  justify-content: space-between;
  padding: 10px;
  border: none
  background-color: lightgray;
`;

export const BasketContent = styled.div`
  padding: 15px 13px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  padding: 14px 10px;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

export const DescriptionContainerGrand = styled(DescriptionContainer)`
  border: none;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 13px 30px;
`;

export const SubmitButton = styled.button`
  background-color: black;
  color: white;
  font-size: 14px;
  padding: 7px 15px;
  width: 100%;
`;
