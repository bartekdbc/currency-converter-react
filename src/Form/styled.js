import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #ffffff;
  min-height: 450px;
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

export const LoadingText = styled.p`
  font-size: 20px;
  line-height: 2;
  margin-top: 30px;
`;

export const ErrorText = styled(LoadingText)`
  color: hsl(352, 73%, 49%);
`;

export const Spinner = styled.div`
  margin: 50px auto;
  height: 60px;
  width: 60px;
  border: 5px solid ${({ theme }) => theme.color.green};
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg) scale(1.2);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
