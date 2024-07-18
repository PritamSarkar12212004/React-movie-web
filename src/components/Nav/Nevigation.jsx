import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/UserContext";
function Nevigation() {
  const { setSideNav, sideNav } = useContext(UserContext);
  const SideNavBTN = (e) => {
    e.preventDefault();
    setSideNav(!sideNav);
  };
  return (
    <div className="h-full flex justify-between ml-2 items-center gap-5 pr-2 ">
      <button className="h-full">
        <img
          className="h-full"
          src="/theme/brightness-and-contrast.png"
          alt=""
        />
      </button>
      <NavLink to="/" className={`h-full flex items-center`}>
        <img className="h-1/2" src="/Home/home.png" alt="" />
      </NavLink>
      <button onClick={(e) => SideNavBTN(e)} className="h-[70%] w-10 ">
        <img
          className={`${sideNav ? `h-[60%]  w-10` : "h-full "} w-full`}
          src={sideNav ? `/Navegiton/close.png` : `/Navegiton/ham.png`}
          alt=""
        />
      </button>
    </div>
  );
}

export default Nevigation;
