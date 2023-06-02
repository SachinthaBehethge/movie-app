import React, { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./app";

const root = document.getElementById("root");

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,

  root
);
