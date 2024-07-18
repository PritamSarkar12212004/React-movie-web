import React, { useContext } from "react";
import Home from "./components/Home/Home";
import UserContext from "./context/UserContext";
function App() {
  const { bgTheme, textTheme } = useContext(UserContext);
  return (
    <div className={ ` overflow-x-hidden h-[100%] w-full ${bgTheme ? "  bg-gray-800" : "bg-white"} ${textTheme ? "text-white" : "text-black"}`}>
      <Home />
    </div>
  );
}

export default App;
