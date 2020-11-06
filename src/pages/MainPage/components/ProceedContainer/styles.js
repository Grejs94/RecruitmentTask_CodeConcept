import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0 30px 0 15px;
  background-color: yellow;
  width: 200px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 180px;
    margin: 30px auto;
    padding: 0 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const inlineButtonsStyles = (theme) => ({
  root: {
    fontSize: 12,

    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      padding: "6px 12px",
    },
  },
});
