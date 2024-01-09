import React from "react";
import './SavedMovies.css';

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";

function SavedMovies() {

  const [savedMovies, setSavedMovies] = React.useState(false);

  return (
    <main className="saved-movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <More savedMovies={savedMovies}></More>
    </main>
  )
}

export default SavedMovies;
