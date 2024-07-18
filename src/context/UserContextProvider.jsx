import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [bgTheme, setBgTheme] = useState(false);
  const [textTheme, settextTheme] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  return (
    <UserContext.Provider
      value={{
        bgTheme,
        setBgTheme,
        textTheme,
        settextTheme,
        sideNav,
        setSideNav,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
