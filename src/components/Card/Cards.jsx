import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";
function Cards() {
  const { Apidata, setApidata } = useContext(UserContext);
  return (
    <div className="w-full h-screen flex flex-wrap justify-center gap-2">
      {Apidata ? (
        Apidata.map((item, index) => {
          return (
            <Link key={index} to={item.downloadLink}>
              <div
                id="movie"
                className="w-[45vw] h-60 rounded p-1  flex flex-col gap-1"
              >
                <img
                  src={item.thumbnailLink}
                  className="h-4/5 w-full rounded hover:scale-105"
                  alt=""
                />
                <label htmlFor="movie">
                  <h2 className="text-center">{item.Movie}</h2>
                </label>
              </div>
            </Link>
          );
        })
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default Cards;
