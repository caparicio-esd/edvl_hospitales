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
  const [playing, setPlaying] = useState<boolean>(false);
  const [events, setEvents] = useState<OpenIcuEvent[]>([]);
  const [timer, setTimer] = useState<number>(null!);
  let timerInterval = 2000;
  const initTimer = () => {
    const timer_ = setTimeout(() => {}, timerInterval);
    setTimer(timer_);
  };
  const clearTimer = () => {
    clearTimeout(timer);
    setTimer(null!);
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
