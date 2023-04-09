import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.sass";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* // TODO: separate context provider based on model playground type */}
    <App />
  </React.StrictMode>
);
