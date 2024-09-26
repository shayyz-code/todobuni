"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TContextAdd = {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
};

const ContextAddDefaultValues = {
  isCollapsed: true,
  setIsCollapsed: () => {},
};

export const ContextAdd = createContext<TContextAdd>(ContextAddDefaultValues);

export function ContextAddProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  return (
    <ContextAdd.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </ContextAdd.Provider>
  );
}
