import React, { useContext } from "react";
import OpenIcu from "../OpenIcu/OpenIcu";
import TestModel from "../TestModel/TestModel";
import Tab from "./Tab";
import TabBody from "./TabBody";
import TabElement from "./TabElement";
import TabHeader from "./TabHeader";
import { TabBlockContext } from "./TabBlockContext";
import { TestModelContextProvider } from "../TestModel/TestModelContext";
import { OpenIcoContextProvider } from "../OpenIcu/OpenIcuContext";

const TabBlock = () => {
  const { activeIndex } = useContext(TabBlockContext);
  return (
    <>
      <TabHeader>
        <Tab index={0} active={activeIndex == 0}>
          Test Model
        </Tab>
        <Tab index={1} active={activeIndex == 1}>
          Open ICU
        </Tab>
      </TabHeader>
      <TabBody>
        {activeIndex == 0 && (
          <TabElement index={0}>
            <TestModelContextProvider>
              <TestModel />
            </TestModelContextProvider>
          </TabElement>
        )}
        {activeIndex == 1 && (
          <TabElement index={1}>
            <OpenIcoContextProvider>
              <OpenIcu />
            </OpenIcoContextProvider>
          </TabElement>
        )}
      </TabBody>
    </>
  );
};

export default TabBlock;
