import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function SearchBox() {
  return (
    <div className="h-[60%] flex item ml-2  w-[30%]">
      <input
        type="text"
        placeholder="search movie"
        className="h-full  bg-slate-300 rounded-lg px-2 outline-none  w-full"
      />
    </div>
  );
}

export default SearchBox;
