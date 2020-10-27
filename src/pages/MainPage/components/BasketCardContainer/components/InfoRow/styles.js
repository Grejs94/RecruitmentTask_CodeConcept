import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 30px;
`;

const rootCell = styled.div`
  padding: 50px 0 20px 0;
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
