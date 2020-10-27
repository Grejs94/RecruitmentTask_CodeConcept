import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 30px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

const rootCell = styled.div`
  padding: 40px 0 40px 0;
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

export const LeftSpaceUsedByFlexboxFirst = styled.div`
  flex: 1;
`;

export const LeftSpaceUsedByFlexboxSecond = styled.div`
  flex: 3;
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  min-width: 25px;
  min-height: 25px;
`;

export const ButtonUndo = styled.button`
  margin-left: 20px;
  padding: 7px 15px;
  font-size: 14px;
  background-color: black;
  color: white;
`;

export const ImgButton = styled.img`
  min-width: 25px;
  min-height: 25px;
`;

export const ValueContainer = styled.div`
  min-width: 25px;
  min-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
`;
