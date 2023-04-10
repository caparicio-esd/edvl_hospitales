import React, { useState } from "react";

type TabBlockContextType = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
};

export const TabBlockContext = React.createContext<TabBlockContextType>(null!);

export const TabBlockContextProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const value = {
    activeIndex,
    setActiveIndex
  };
  return (
    <TabBlockContext.Provider value={value}>
      {children}
    </TabBlockContext.Provider>
  );
};
