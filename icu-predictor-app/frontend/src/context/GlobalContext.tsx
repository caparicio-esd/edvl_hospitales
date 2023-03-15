import React, { ChangeEventHandler, useState } from "react";
import {
  dataToBackendAdapter,
  formData as formDataOriginal,
  FormRangeData,
} from "./FormData";
import { faker } from "@faker-js/faker";

type GlobalContextType = {
  prediction: {
    value: any;
    isError: boolean;
    isLoading: boolean;
  };
  isModalOpened: boolean;
  formData: FormRangeData[];
  formDataChangeHandler: ChangeEventHandler;
  randomizeData: () => void;
  resetData: () => void;
  fetchModelPrediction: () => Promise<void>;
  openModal: () => void
  closeModal: () => void
};

export const GlobalContext = React.createContext<GlobalContextType>(null!);
export const GlobalContextProvider = ({ children }) => {
  const [formData, _setFormData] = useState<FormRangeData[]>(formDataOriginal);
  const [isLoading, _setIsLoading] = useState(false);
  const [isError, _setIsError] = useState(false);
  const [prediction, _setPrediction] = useState(null);
  const [isModalOpened, _setModalOpened] = useState(false);

  const formDataChangeHandler = ({ currentTarget }) => {
    const name = currentTarget.name;
    const formData_ = [...formData];
    const nameIndex = formData_.findIndex((f) => f.name == name);
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

  const fetchModelPrediction = async () => {
    _setIsError(false);
    _setIsLoading(true);
    _setPrediction(null);
    openModal()

    const data = await fetch("/api/edvl_model", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToBackendAdapter(formData)),
    }).then(
      (d) => d.json(),
      (err) => {
        _setIsLoading(false);
        _setIsError(true);
        console.error(err);
      }
    );
    console.log(data);
    _setPrediction(data!);
    _setIsLoading(false);
  };

  const resetData = () => {
    _setFormData(formDataOriginal);
    _setIsError(false);
    _setIsLoading(false);
    _setPrediction(null);
  };

  const openModal = () => {
    _setModalOpened(true);
  };
  const closeModal = () => {
    _setModalOpened(false);
  };

  const value = {
    prediction: {
      value: prediction,
      isError,
      isLoading,
    },
    formData,
    isModalOpened,
    formDataChangeHandler,
    randomizeData,
    resetData,
    fetchModelPrediction,
    openModal,
    closeModal
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
