import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Theme from "./theme";
import { createGlobalStyle } from "styled-components";
import { textColor } from "./theme/getThemeValues";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  font-family: sans-serif;
}
a{
  text-decoration: none;
  ${textColor}
}
html{
  background: ${(props) => props.theme.palette.background.default};
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
