import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests.fetchNetflixOrignals);
      let index = Math.floor(Math.random() * res.data.results.length - 1);
      setMovie(res.data.results[index]);
    }
    fetchData();
  }, []);

  function truncate(str, n){
      return str?.length>n? str.substr(0, n-1) + "..." :str;
  }
  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">{movie.original_name || movie.title || movie.name}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">More Info</button>
        </div>
        <h5 className="banner-description">{truncate(movie.overview, 150)}</h5>
      </div>
      <div className="fader-bottom"></div>
    </header>
  );
}

export default Banner;
