import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 20px;
`;

const rootCell = styled.div`
  padding: 16px 0 25px 0;
`;

export const PictureCell = styled(rootCell)`
  flex: 7;
  display: flex;
  align-items: center;
`;

export const NameCell = styled(rootCell)`
  flex: 3;
`;

export const UnitCell = styled(NameCell)`
  flex: 3;
`;

export const ButtonsCell = styled(rootCell)`
  flex: 4;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 14px;
  padding: 7px 15px;
`;
