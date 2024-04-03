import { useDispatch } from "react-redux";
import { getQueryImagesThunk } from "../../../features/images/imagesThunk";

const SearchForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    dispatch(getQueryImagesThunk(query))
  }

  return (
  <section className="search">
    <h1 className="search__title">Unbelievable images to download</h1>
    <p className="search__text">Over 1 million images shared by our talented community.</p>
    <form className="search__form" onSubmit={handleSubmit}>
      <input type="text" className="search__input" placeholder="Search images" />
    </form>
  </section>
  );
};

export default SearchForm;
