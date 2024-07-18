import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/UserContext";
function Nevigation() {
  const { setSideNav, sideNav, bgTheme, setBgTheme, textTheme, settextTheme } =
    useContext(UserContext);
  const SideNavBTN = (e) => {
    e.preventDefault();
    setSideNav(!sideNav);
  };
  const SetTheme = (e) => {
    e.preventDefault();
    setBgTheme(!bgTheme);
    settextTheme(!textTheme);
    console.log(bgTheme, textTheme);
  };
  return (
    <div className="h-12 flex justify-between ml-2 items-center   pr-2 absolute right-0 gap-5 ">
      <button className="h-full" onClick={(e) => SetTheme(e)}>
        <img
          className="h-full"
          src="/theme/brightness-and-contrast.png"
          alt=""
        />
      </button>
      <NavLink to="/" className={`h-full flex items-center`}>
        <img className="h-1/2" src="/Home/home.png" alt="" />
      </NavLink>
      <button
        onClick={(e) => SideNavBTN(e)}
        className="h-[70%] w-10 flex items-center justify-center "
      >
        <img
          className={`${sideNav ? `h-[60%] w-5` : "h-full "} w-full`}
          src={sideNav ? `/Navegiton/close.png` : `/Navegiton/ham.png`}
          alt=""
        />
      </button>
    </div>
  );
}

export default Nevigation;
