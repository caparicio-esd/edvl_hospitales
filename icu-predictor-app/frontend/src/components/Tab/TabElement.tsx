import React, { FC } from "react";

type TabElementProps = {
  children: React.ReactNode;
  index: number;
  active?: boolean;
};

const TabElement: FC<TabElementProps> = ({ children, index, active }) => {
  return <div>{children}</div>;
};

export default TabElement;
