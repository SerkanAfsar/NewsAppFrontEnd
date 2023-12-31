import React, { createContext, useState } from "react";

export const AdminContext = createContext("light");

export const AdminContextProvider = ({ children }) => {
  const [pageName, setPageName] = useState("Anasayfa");

  return (
    <AdminContext.Provider value={{ pageName, setPageName }}>
      {children}
    </AdminContext.Provider>
  );
};
