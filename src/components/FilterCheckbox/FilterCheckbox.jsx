import React from "react";
import './FilterCheckbox.css';


function FilterCheckbox() {


  return (
    <label className="filter-checkbox smooth-transition">Короткометражки
      <input className="filter-checkbox__toggle" type="checkbox" form="search-form" name="toggle-checkbox"></input>
      <span className="filter-checkbox__track"></span>
    </label>

  )
}

export default FilterCheckbox;
