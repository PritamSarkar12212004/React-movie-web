import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";

const UserContextProvider = ({ children }) => {
  const [bgTheme, setBgTheme] = useState(false);
  const [textTheme, settextTheme] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [Apidata, setApidata] = useState([]);
  const mongoApi = () => {
    axios
      .get("https://mocki.io/v1/cf5a65e0-10fe-4413-bb1c-b24029d77f54")
      .then((res) => setApidata(res.data));
  };
  useEffect(() => {
    mongoApi();
  }, []);
  return (
    <UserContext.Provider
      value={{
        bgTheme,
        setBgTheme,
        textTheme,
        settextTheme,
        sideNav,
        setSideNav,
        Apidata, setApidata
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
