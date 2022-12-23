import styled from "styled-components";

export const Container = styled.div`
  min-height: 550px;
  flex-basis: 650px;
  margin: 20px auto 0px;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.color.black} 0px 0px 20px;
`;
