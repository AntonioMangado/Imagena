import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterFavorites } from "../../../features/favorites/favoritesSlice";

const FavoritesForm = () => {

  const dispatch = useDispatch();
  const [filterQuery, setFilterQuery] = useState('');

  const handleChange = (e) => {
    setFilterQuery(e.target.value);
  }

  useEffect(() => {
    dispatch(filterFavorites({query: filterQuery}));
  }, [dispatch, filterQuery]);

  

  return (
  <section className="search">
    <h1 className="search__title">Your saved photos.</h1>
    <form className="search__form">
      <input type="text" className="search__input" placeholder="Search images" onChange={handleChange} value={filterQuery}/>
    </form>
  </section>
  );
};

export default FavoritesForm;
