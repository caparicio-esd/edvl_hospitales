import React, { ChangeEventHandler, useContext, useState } from "react";
import {
  dataToBackendAdapter,
  formData as formDataOriginal,
  FormRangeData,
} from "../../context/FormData";
import { faker } from "@faker-js/faker";
import { GlobalContext } from "../../context/GlobalContext";

type TestModelContextType = {
  prediction: {
    value: any;
    isError: boolean;
    isLoading: boolean;
  };
  isModalOpened: boolean;
  formData: FormRangeData[];
  formDataChangeHandler: ChangeEventHandler;
  testModelRandomizeData: () => void;
  resetData: () => void;
  testModelFetchModelPrediction: () => Promise<void>;
  openModal: () => void;
  closeModal: () => void;
};

export const TestModelContext = React.createContext<TestModelContextType>(
  null!
);
export const TestModelContextProvider = ({ children }) => {
  const [formData, _setFormData] = useState<FormRangeData[]>(formDataOriginal);
  const [isLoading, _setIsLoading] = useState(false);
  const [isError, _setIsError] = useState(false);
  const [prediction, _setPrediction] = useState(null);
  const [isModalOpened, _setModalOpened] = useState(false);
  const { randomizeData, fetchModelPrediction } = useContext(GlobalContext);

  const formDataChangeHandler = ({ currentTarget }) => {
    const name = currentTarget.name;
    const formData_ = [...formData];
    const nameIndex = formData_.findIndex((f) => f.name == name);
    formData_[nameIndex].formConfig.value = +currentTarget.value;
    _setFormData(formData_);
  };

  const testModelRandomizeData = () => {
    const formData_ = randomizeData();
    _setFormData(formData_);
  };

  const testModelFetchModelPrediction = async () => {
    _setIsError(false);
    _setIsLoading(true);
    _setPrediction(null);
    openModal();
    const data = await fetchModelPrediction(formData)
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
    testModelRandomizeData,
    resetData,
    testModelFetchModelPrediction,
    openModal,
    closeModal,
  };
  return (
    <TestModelContext.Provider value={value}>
      {children}
    </TestModelContext.Provider>
  );
};
