import React from "react";
import { NavLink } from "react-router-dom";

function Nevigation() {
  return (
    <div className="h-full flex justify-between ml-2 items-center gap-2">
      <button className="h-full">
        <img
          className="h-full"
          src="/theme/brightness-and-contrast.png"
          alt=""
        />
      </button>
      <NavLink to="/" className={`h-full flex items-center`}>
        <img className="h-1/2" src="public/Home/home.png" alt="" />
      </NavLink>
      <button className="h-[70%]">
        <img className="h-full" src="public/Navegiton/ham.png" alt="" />
      </button>
    </div>
  );
}

export default Nevigation;
