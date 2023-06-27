import "./GlobalStyles.scss";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --primary-color: #fe2c55;
  --secondary-color: #1f212b;
  --bg-color: #fff;
}

html {
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  text-rendering: optimizeSpeed;
}
`;

export default GlobalStyles;
