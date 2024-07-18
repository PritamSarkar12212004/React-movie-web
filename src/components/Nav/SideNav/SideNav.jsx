import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
function SideNav() {
  const { sideNav } = useContext(UserContext);
  return (
    <div
      className={`w-[95%] h-screen rounded-s-xl ${
        sideNav ? `absolute right-0` : `absolute right-[-100%]`
      }  bg-slate-300 `}
    ></div>
  );
}

export default SideNav;
