"use client";

import { type } from "os";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TContextAdd = {
  isCollapsedTasks: boolean;
  setIsCollapsedTasks: Dispatch<SetStateAction<boolean>>;
  isCollapsedPicks: boolean;
  setIsCollapsedPicks: Dispatch<SetStateAction<boolean>>;
  handleToggleTask: () => void;
  handleTogglePick: () => void;
};

const ContextAddDefaultValues = {
  isCollapsedTasks: true,
  setIsCollapsedTasks: () => {},
  isCollapsedPicks: true,
  setIsCollapsedPicks: () => {},
  handleToggleTask: () => {},
  handleTogglePick: () => {},
};

export const ContextAdd = createContext<TContextAdd>(ContextAddDefaultValues);

export function ContextAddProvider({ children }: { children: ReactNode }) {
  const [isCollapsedTasks, setIsCollapsedTasks] = useState<boolean>(true);
  const [isCollapsedPicks, setIsCollapsedPicks] = useState<boolean>(true);

  const handleToggleTask = () => {
    setIsCollapsedTasks(!isCollapsedTasks);
    setIsCollapsedPicks(true);
  };

  const handleTogglePick = () => {
    setIsCollapsedPicks(!isCollapsedPicks);
    setIsCollapsedTasks(true);
  };

  return (
    <ContextAdd.Provider
      value={{
        isCollapsedTasks,
        setIsCollapsedTasks,
        isCollapsedPicks,
        setIsCollapsedPicks,
        handleToggleTask,
        handleTogglePick,
      }}
    >
      {children}
    </ContextAdd.Provider>
  );
}
