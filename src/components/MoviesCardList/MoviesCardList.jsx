import React from "react";
import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {



  return (
    <section className="movies-card">
      <ul className="cards">
        <MoviesCard></MoviesCard>
      </ul>
    </section>
  )
}

export default MoviesCardList;
