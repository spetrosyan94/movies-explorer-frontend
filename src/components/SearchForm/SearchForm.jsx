import React from "react";
import './SearchForm.css';

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {


  return (
    <section className="search-form">
      <div className="search-form__container">

        <form className="form" id="search-form" name="search-form" noValidate>
          <input className="form__search-input" form="search-form" name="search" placeholder="Фильм"></input>
          <button className="form__submit-btn smooth-transition" type="submit" aria-label="Кнопка поиска фильмов"> Найти</button>

          <FilterCheckbox />
        </form>

      </div>
    </section>
  )
}

export default SearchForm;
