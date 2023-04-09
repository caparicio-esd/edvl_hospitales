import clsx from "clsx";
import React, { FC, useContext } from "react";
import { TabBlockContext } from "../../context/TabBlockContext";

type TabProps = {
  children: React.ReactNode;
  index: number;
  active?: boolean;
};

const Tab: FC<TabProps> = ({ children, index, active }) => {
  const { setActiveIndex } = useContext(TabBlockContext);
  const classes = clsx(
    ["tab", "tab-bordered", "font-semibold", "mb-4", "text-base"],
    { [`tab-active`]: active }
  );

  return (
    <>
      <a className={classes} onClick={() => setActiveIndex(index)}>
        {children}
      </a>
    </>
  );
};

export default Tab;
