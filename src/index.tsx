import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // You can add some basic styles here

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
