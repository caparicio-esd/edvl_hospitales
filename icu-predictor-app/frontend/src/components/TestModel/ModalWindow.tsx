import clsx from "clsx";
import React, { useContext, useMemo } from "react";
import { TestModelContext } from "./TestModelContext";
import Spinner from "../Global/Spinner";

const ModalWindow = () => {
  const { prediction, isModalOpened, closeModal } = useContext(TestModelContext);
  const circleLength = 240.2;
  const circleLengthOffset = useMemo(() => {
    return circleLength * (1 - prediction.value?.predict_proba) || 0;
  }, [prediction]);

  const modalWindowClasses = clsx("modal_window modal", {
    "modal-open": isModalOpened,
  });
  const modalWindowLoader = (
    <div className="modal_window_loading flex flex-col items-center justify-center gap-4 text-center h-full">
      <Spinner />
      <p>Consultando al modelo...</p>
    </div>
  );

  return (
    <div className={modalWindowClasses}>
      <div className="modal-box h-full max-h-[300px] relative">
        {prediction.isLoading ? (
          modalWindowLoader
        ) : (
          <div className="modal_window_content flex flex-col items-center justify-center gap-8 text-center h-full">
            <div className="modal_window_dataviz">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="37.5"
                  stroke="#D9D9D9"
                  strokeWidth="5"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="37.5"
                  stroke="#E77848"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className={`transition-all duration-500 ${prediction.value?.prediction ? "stroke-error" : "stroke-success"}`}
                  style={{
                    strokeDashoffset: circleLengthOffset,
                    strokeDasharray: circleLength,
                    transform: "rotate(-86deg)",
                    transformOrigin: "center",
                  }}
                />
              </svg>
            </div>
            <div className="modal_window_text">
              <p className="mb-1">
                {" "}
                {prediction.value?.prediction
                  ? "El paciente entra en UCI"
                  : "El paciente no entra en UCI"}
              </p>
              <p className="text-sm text-gray-600">
                La probabilidad del modelo es de{" "}
                {(+prediction.value?.predict_proba).toFixed(2)}
              </p>
            </div>
            <div
              className="modal_window_close absolute top-4 right-4 cursor-pointer hover:scale-90 transition-transform"
              onClick={closeModal}
            >
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.375 18.5C32.375 10.8398 26.1602 4.625 18.5 4.625C10.8398 4.625 4.625 10.8398 4.625 18.5C4.625 26.1602 10.8398 32.375 18.5 32.375C26.1602 32.375 32.375 26.1602 32.375 18.5Z"
                  stroke="#858585"
                  strokeWidth={2.3125}
                  strokeMiterlimit={10}
                />
                <path
                  d="M23.125 23.125L13.875 13.875M13.875 23.125L23.125 13.875"
                  stroke="#858585"
                  strokeWidth={2.3125}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalWindow;
