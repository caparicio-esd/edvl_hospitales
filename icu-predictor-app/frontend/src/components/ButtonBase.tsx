import React, { FC, MouseEventHandler } from "react";
import clsx from "clsx";

type ButtonBaseProps = {
  children: React.ReactNode;
  outline?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const ButtonBase: FC<ButtonBaseProps> = ({
  children,
  outline = false,
  disabled = false,
  onClick,
}) => {
  const classes = clsx([
    "btn",
    "rounded-full border-2 capitalize",
    "py-3 px-6 h-auto min-h-0",
    {
      "btn-outline": outline,
    },
  ]);

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};

export default ButtonBase;
