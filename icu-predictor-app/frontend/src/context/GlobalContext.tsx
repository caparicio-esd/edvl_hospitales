import React, { ChangeEventHandler, useState } from "react";
import { formData as formDataOriginal, FormRangeData } from "./FormData";
import { faker } from "@faker-js/faker";

type GlobalContextType = {
  formData: FormRangeData[];
  formDataChangeHandler: ChangeEventHandler;
  randomizeData: () => void, 
  resetData: () => void, 
};

export const GlobalContext = React.createContext<GlobalContextType>(null!);
export const GlobalContextProvider = ({ children }) => {
  const [formData, _setFormData] = useState<FormRangeData[]>(formDataOriginal);

  const formDataChangeHandler = ({ currentTarget }) => {
    const name = currentTarget.name;
    const formData_ = [...formData];
    const nameIndex = formData_.findIndex((f) => f.title == name);
    formData_[nameIndex].formConfig.value = +currentTarget.value;
    _setFormData(formData_);
  };

  const randomizeData = () => {
    const formData_ = formData.map((formDataItem) => {
      const value = faker.datatype.number({
        min: formDataItem.formConfig.min,
        max: formDataItem.formConfig.max,
        precision: formDataItem.formConfig.step,
      });
      return {
        ...formDataItem,
        formConfig: {
          ...formDataItem.formConfig,
          value,
        },
      };
    });
    _setFormData(formData_);
  };

  const resetData = () => {
    _setFormData(formDataOriginal);
  }

  const value = { formData, formDataChangeHandler, randomizeData, resetData };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
