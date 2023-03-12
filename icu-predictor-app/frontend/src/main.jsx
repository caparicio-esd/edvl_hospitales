import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalContextProvider } from "./context/GlobalContext";
import "./index.sass";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
