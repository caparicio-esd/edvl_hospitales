import React from "react";

const OpenIcuIncomingEvent = () => {
  return (
    <div className="icu_meta flex flex-col gap-2">
      <h4 className="font-semibold mb-2">Incoming event</h4>
      <div className="icu_meta_info text-sm flex gap-2 items-baseline">
        <div className="icu_label font-semibold">Exp. Date</div>
        <div className="icu_separator">-</div>
        <div className="content">09.04.2023 - 14.45.23</div>
      </div>
      <div className="icu_meta_info text-sm flex gap-2 items-baseline">
        <div className="icu_label font-semibold">Sort position</div>
        <div className="icu_separator">-</div>
        <div className="content">2 / 23</div>
      </div>
      <div className="icu_meta_info text-sm flex gap-2 items-baseline">
        <div className="icu_label font-semibold">Prediction</div>
        <div className="icu_separator">-</div>
        <div className="content">TRUE</div>
      </div>
      <div className="icu_meta_info text-sm flex gap-2 items-baseline">
        <div className="icu_label font-semibold">Prediction Proba</div>
        <div className="icu_separator">-</div>
        <div className="content">25%</div>
      </div>
      <div className="icu_meta_info text-sm flex flex-col items-baseline gap-2 ">
        <div className="icu_label font-semibold">Created Data</div>
        <div className="icu_content leading-normal max-w-[70ch]">
          Lorem ipsum dolor sit amet consectetur. Adipiscing velit mauris in
          tincidunt dictum pellentesque tincidunt urna. Sed vel egestas vitae
          bibendum tempus. Condimentum integer mattis feugiat pharetra semper
          volutpat est. Cras varius quam libero non leo placerat orci habitant
          nunc. Eu aenean ultrices vivamus vulputate netus. Massa tempus sed ut
          morbi aliquet ultrices sed pulvinar. In gravida nunc eget a nec dolor
          in. Et.
        </div>
      </div>
    </div>
  );
};

export default OpenIcuIncomingEvent;
