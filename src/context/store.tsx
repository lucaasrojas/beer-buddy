"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface ContextType {
  title: string;
  setTitle: (title: string) => void;
}

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("Cervezas disponibles");
  return (
    <Context.Provider value={{ title, setTitle }}>
      {children}
    </Context.Provider>
  );
};

export const useStore = () => {
  const context = useContext(Context);
  if (!context) throw new Error("useStore must be used within ContextProvider");
  return context;
};