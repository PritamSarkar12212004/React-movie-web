import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [bgTheme, setBgTheme] = useState(false);
  const [textTheme, settextTheme] = useState(false);
  return (
    <UserContext.Provider
      value={{
        bgTheme,
        setBgTheme,
        textTheme,
        settextTheme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
