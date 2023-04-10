import React, { useState } from "react";

type OpenIcuEvent = {};
type OpenIcuContextType = {
  playing: boolean;
  events: OpenIcuEvent[];
  initTimer: () => void;
  clearTimer: () => void;
};

export const OpenIcuContext = React.createContext<OpenIcuContextType>(null!);
export const OpenIcoContextProvider = ({ children }) => {
  const timerInterval = 1000;
  const [playing, setPlaying] = useState<boolean>(false);
  const [events, setEvents] = useState<OpenIcuEvent[]>([]);
  const [timer, setTimer] = useState<number>(null!);
  
  const initTimer = () => {
    const timer_ = setInterval(timerHandler, timerInterval);
    setTimer(timer_);
    setPlaying(true)
  };
  const clearTimer = () => {
    clearInterval(timer);
    setTimer(null!);
    setPlaying(false)
  };
  const timerHandler = () => {
    console.log("handler...");
  };

  const value: OpenIcuContextType = {
    playing,
    events,
    initTimer,
    clearTimer,
  };
  return (
    <OpenIcuContext.Provider value={value}>{children}</OpenIcuContext.Provider>
  );
};
