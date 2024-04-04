import React from "react";

const FavoritesForm = () => {
  return (
  <section className="search">
    <h1 className="search__title">Your saved photos.</h1>
    <form className="search__form">
      <input type="text" className="search__input" placeholder="Search images" />
    </form>
  </section>
  );
};

export default FavoritesForm;
