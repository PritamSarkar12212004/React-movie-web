import React from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Navigation from "./Nevigation";

function Nav() {
  return (
    <div className="w-full h-16  flex  items-center" style={{borderBottom:"1px solid #e5e5e5"}}>
      <Logo />
      <SearchBox />
      <Navigation />
    </div>
  );
}

export default Nav;
