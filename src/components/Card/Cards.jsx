import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
function Cards() {
  const { Apidata, setApidata } = useContext(UserContext);
  console.log(Apidata);
  return (
    <div className="w-full h-screen flex flex-wrap justify-center gap-2">
      {Apidata ? (
        Apidata.map((item, index) => {
          return (
            <div
              key={index} id="movie"
              className="w-[45vw] h-60 rounded p-1  flex flex-col gap-1"
            >
              <img
                src={item.thumbnailLink}
                className="h-4/5 w-full rounded"
                alt=""
                  />
                  <label htmlFor="movie">
              <h2 className="text-center">{item.Movie}</h2>
                  </label>
            </div>
          );
        })
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default Cards;
