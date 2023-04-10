import React, { useContext } from "react";
import ButtonBase from "./../Global/ButtonBase";
import OpenIcuCard from "./OpenIcuCard";
import OpenIcuIncomingEvent from "./OpenIcuIncomingEvent";
import Spinner from "../Global/Spinner";
import { OpenIcuContext } from "./OpenIcuContext";

const OpenIcu = () => {
  const { playing, initTimer, clearTimer } = useContext(OpenIcuContext);
  const bla = true;

  const playPauseHandler = () => {
    if (playing) {
      clearTimer();
    } else {
      initTimer();
    }
  };

  return (
    <div className="playground_section border ">
      <div className="playground bg-slate-100 py-16 min-h-[700px] border ">
        <div className="playground_holder container mx-auto grid grid-cols-2 gap-x-12">
          <div className="icu_rank min-h-[482px] flex flex-col gap-2">
            {bla ? (
              <>
                <OpenIcuCard />
                <OpenIcuCard />
                <OpenIcuCard />
                <OpenIcuCard />
                <OpenIcuCard />
                <OpenIcuCard />
                <OpenIcuCard />
              </>
            ) : (
              <span className="border-2 border-gray-400 border-dashed w-full h-full flex items-center justify-center">
                <span className="text-sm font-semibold ">No data yet...</span>
              </span>
            )}
          </div>
          <div className="icu_info flex flex-col gap-12">
            <div className="icu_ctas flex gap-2">
              <ButtonBase onClick={playPauseHandler}>
                <span className="flex items-center gap-2">
                  {playing ? (
                    <>
                      <span>Pause</span>
                      <Spinner className="fill-white" />
                    </>
                  ) : (
                    <span>Play</span>
                  )}
                </span>
              </ButtonBase>
              <ButtonBase outline disabled>
                Reset
              </ButtonBase>
            </div>
            {bla ? (
              <OpenIcuIncomingEvent />
            ) : (
              <span className="text-sm font-semibold ">
                No events yet... Click play
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenIcu;
