import React, { useContext } from "react";
import { TestModelContext } from "./TestModelContext";
import ButtonBase from "../Global/ButtonBase";
import RangeInputData from "./RangeInputData";
import Spinner from "../Global/Spinner";
import ModalWindow from "./ModalWindow";

const TestModel = () => {
  const {
    formData,
    randomizeData,
    resetData,
    prediction,
    fetchModelPrediction,
  } = useContext(TestModelContext!);

  return (
    <>
      <section className="playground_section">
        <div className="playground bg-slate-100 py-16">
          <div className="playground_holder container mx-auto grid grid-cols-3 gap-x-12 gap-y-8">
            <div className="playground_header col-span-3 grid grid-cols-3 gap-12 border-b-2 border-b-gray-300 pb-8">
              {formData.slice(0, 3).map((f, i) => (
                <RangeInputData formData={f} key={i} />
              ))}
            </div>
            <div className="play_ground_block flex flex-col gap-8">
              {formData.slice(3, 11).map((f, i) => (
                <RangeInputData formData={f} key={i} />
              ))}
            </div>
            <div className="play_ground_block flex flex-col gap-8">
              {formData.slice(11, 19).map((f, i) => (
                <RangeInputData formData={f} key={i} />
              ))}
            </div>
            <div className="play_ground_block flex flex-col gap-8">
              {formData.slice(19).map((f, i) => (
                <RangeInputData formData={f} key={i} />
              ))}
            </div>
            <div className="playground_footer col-span-3 flex gap-4 items-center border-t-2 border-t-gray-300 pt-8 text-sm">
              <ButtonBase outline onClick={randomizeData}>
                Randomize
              </ButtonBase>
              <ButtonBase outline onClick={resetData}>
                Reset
              </ButtonBase>
              <ButtonBase
                onClick={fetchModelPrediction}
                disabled={prediction.isLoading}
              >
                Predecir
              </ButtonBase>
              <div className="playground_output flex gap-2 items-center">
                {prediction.isLoading && <Spinner />}
                {prediction.value && (
                  <span className="prediction">
                    {prediction.value.prediction
                      ? "El paciente entra en UCI"
                      : "El paciente no entra en UCI"}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalWindow />
    </>
  );
};

export default TestModel;
