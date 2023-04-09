import clsx from "clsx";
import React, { FC, memo, useContext } from "react";
import { FormRangeData } from "../../context/FormData";
import { TestModelContext } from "./TestModelContext";

type RangeInputDataProps = {
  formData: FormRangeData;
};
const RangeInputData: FC<RangeInputDataProps> = memo(({ formData }) => {
  const { formDataChangeHandler } = useContext(TestModelContext);
  
  //styles
  const rangeInputDataClasses = clsx(
    ["range_input_data text-sm flex items-center  gap-8"],
    {
      "justify-between": formData.layout?.justifyContent,
    }
  );
  const rangeInputClasses = clsx(["range_input flex items-center gap-2"], {
    "flex-1": formData.layout?.fillRangeSize,
  });
  const rangeInputInputClasses = clsx(["range range-xs"], {
    "flex-1": formData.layout?.fillRangeSize,
    "max-w-[70px]": !formData.layout?.fillRangeSize
  }, formData.colorizeFunction!(formData.formConfig.value));

  // render
  return (
    <div className={rangeInputDataClasses}>
      <label className="range_data flex items-center gap-1">
        <span className="range_title font-bold">{formData.title}</span>
        {formData.tagline && <span className="range_separator">-</span>}
        <span className="range_tagline">{formData.tagline}</span>
      </label>
      <div className={rangeInputClasses}>
        <input
          type="range"
          className={rangeInputInputClasses}
          onChange={formDataChangeHandler}
          min={formData.formConfig.min}
          max={formData.formConfig.max}
          step={formData.formConfig.step}
          value={formData.formConfig.value}
          name={formData.name}
        />
        <span className="range_label text-xs uppercase min-w-[40px]">
          {formData.toString(formData.formConfig.value)}
        </span>
      </div>
    </div>
  );
});

export default RangeInputData;
