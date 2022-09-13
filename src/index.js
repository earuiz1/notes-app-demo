import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <React.Fragment>
    <ToastContainer limit={1} />
    <App />
  </React.Fragment>
  //</React.StrictMode>
);
