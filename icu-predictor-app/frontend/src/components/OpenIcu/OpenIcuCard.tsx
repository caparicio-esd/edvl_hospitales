import React from "react";
import OpenIcuCardDataViz from "./OpenIcuCardDataViz";

const OpenIcuCard = () => {
  return (
    <div className="icu_rank_item bg-white px-6 py-4 rounded shadow-lg flex items-center gap-4">
      <div className="icu_rank_item_num text-sm ">#1</div>
      <div className="icu_rank_item_dataviz">
        <OpenIcuCardDataViz />
      </div>
      <div className="icu_rank_item_title flex flex-1 items-baseline gap-1">
        <h4 className="font-semibold">Event</h4>
        <span className="separator text-sm">-</span>
        <span className="counter text-sm">2/23</span>
      </div>
      <div className="icu_rank_item_date text-sm">
        <span className="icu_rank_item_date_item flex gap-2">
          <div className="title font-semibold">Date</div>
          <div className="date">date...</div>
        </span>
        <span className="icu_rank_item_date_item flex gap-2">
          <div className="title font-semibold">Exp</div>
          <div className="date">date...</div>
        </span>
      </div>
    </div>
  );
};

export default OpenIcuCard;
