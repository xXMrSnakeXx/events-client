import { createContext, useContext } from "react";

export const SelectContext = createContext();

export const useSelect = () => {
  return useContext(SelectContext);
};
