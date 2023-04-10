import React, { ChangeEventHandler, useState } from "react";
import {
  dataToBackendAdapter,
  formData as formDataOriginal,
  FormRangeData,
} from "./FormData";
import { faker } from "@faker-js/faker";

type GlobalContextType = {
  randomizeData: () => FormRangeData[];
  fetchModelPrediction: (formData: Array<FormRangeData>) => Promise<any>;
};

export const GlobalContext = React.createContext<GlobalContextType>(null!);
export const GlobalContextProvider = ({ children }) => {
  const randomizeData = (): FormRangeData[] => {
    const randomizedData = formDataOriginal.map((formDataItem) => {
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
    return randomizedData;
  };

  const fetchModelPrediction = async (formData: FormRangeData[]): Promise<any> => {
    // TODO: must be differentiated based on env production or dev
    const data = await fetch("http://localhost:5000/api/edvl_model", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToBackendAdapter(formData)),
    }).then((d) => d.json());
    return data;
  };

  // HERE: <-------------------------------------------------
  const value = {
    randomizeData,
    fetchModelPrediction,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
