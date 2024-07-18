import React, { useContext } from "react";
import Nav from "../Nav/Nav";
import SideNav from "../Nav/SideNav/SideNav";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import UserContext from "../../context/UserContext";
function Home() {
  const { Apidata } = useContext(UserContext);
  return (
    <div className="w-full h-screen  ">
      {Apidata.length > 0 ? (
        <div>
          <Nav />
          <SideNav />
          <Card />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Home;
