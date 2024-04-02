import React from "react";

const SearchForm = () => {
  return (
  <section className="search">
    <h1 className="search__title">Unbelievable images to download</h1>
    <p className="search__text">Over 1 million images shared by our talented community.</p>
    <form className="search__form">
      <input type="text" className="search__input" placeholder="Search images" />
    </form>
  </section>
  );
};

export default SearchForm;
