import React from "react";
import Nav from "../Nav/Nav";
import SideNav from "../Nav/SideNav/SideNav";
import Card from "../Card/Card";

function Home() {
  return (
    <div className="w-full h-screen overflow-x-hidden  ">
      <Nav />
      <SideNav />
      <Card />
    </div>
  );
}

export default Home;
