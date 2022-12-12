import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #ffffff;
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.color.green};
  text-align: center;
  border-radius: 5px;
  font-size: 30px;
  margin: 0px 10px;
  padding: 1px;
`;

export const Special = styled.span`
  font-family: "Comforter Brush", cursive;
  font-size: 40px;
  font-weight: 500;
`;

export const StyledFieldset = styled.fieldset`
  border: none;
`;

export const Label = styled.label`
  margin-bottom: 20px;
`;

export const LabelText = styled.span`
  display: inline-block;
  max-width: 200px;
  width: 100%;
`;

export const FormField = styled.input`
  border: 2px solid ${({ theme }) => theme.color.green};
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  max-width: 260px;
  margin: 10px 10px 0px 0px;
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.green};
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  text-transform: uppercase;
  text-shadow: ${({ theme }) => theme.color.black} 1px 1px 2px;
  font-weight: bold;
  margin: 10px 0px 0px;
  box-shadow: ${({ theme }) => theme.color.black} 1px 2px 5px;

  &:hover {
    background-color: ${({ theme }) => theme.color.silverTree};
  }
`;
