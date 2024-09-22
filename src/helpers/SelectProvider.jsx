import { useState } from "react";
import { SelectContext } from "../hooks/useSelect";

export const SelectProvider = ({ children }) => {
  const [select, setSelect] = useState("");
  return (
    <SelectContext.Provider value={{ select, setSelect }}>
      {children}
    </SelectContext.Provider>
  );
};
