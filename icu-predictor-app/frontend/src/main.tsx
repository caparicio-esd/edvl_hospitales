import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.sass";
import { GlobalContextProvider } from "./context/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* // TODO: separate context provider based on model playground type */}
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
