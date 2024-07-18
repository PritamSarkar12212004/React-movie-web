import React from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Navigation from "./Nevigation";

function Nav() {
  return (
    <div
      className="w-full h-16  flex  items-center fixd top-0 z-50 bg-white"
      style={{
        borderBottom: "1px solid #e5e5e5",
        position: "sticky",
        top: "0",
      }}
    >
      <Logo />
      <SearchBox />
      <Navigation />
    </div>
  );
}

export default Nav;
