import React, { memo } from "react";

const OpenIcuCardDataViz = () => {
  return (
    <div className="modal_window_dataviz">
      <svg
        width="44"
        height="44"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="35" stroke="#D9D9D9" strokeWidth="7" />
        <circle
          cx="40"
          cy="40"
          r="35"
          stroke="#E77848"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default memo(OpenIcuCardDataViz);
