import { createGlobalStyle } from "styled-components";
import background from "./background.png";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background-image: url("${background}");
  background-size: cover;
  background-position: center center;
  background-color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  color: #353535;
  text-align: center;
  line-height: 1.5;
  margin: 20px;
}

#root {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
}
`;
