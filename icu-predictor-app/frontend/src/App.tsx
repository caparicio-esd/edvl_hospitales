import React from "react";
import HeaderBase from "./components/Global/HeaderBase";
import ModalWindow from "./components/TestModel/ModalWindow";
import Presentation from "./components/Global/Presentation";
import TabBlock from "./components/Tab/TabBlock";
import { TabBlockContextProvider } from "./context/TabBlockContext";

const App = () => {
  return (
    <div>
      <HeaderBase />
      <Presentation />
      <TabBlockContextProvider>
        <TabBlock />
      </TabBlockContextProvider>
    </div>
  );
};

export default App;
