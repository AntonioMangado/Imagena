import { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDownload } from "@fortawesome/free-solid-svg-icons";
import { addFavorite, removeFavorite, getFavoritesData, getFavoritesStatus, getFavoritesError } from "../../../../features/favorites/favoritesSlice.js";


const Card = ({ source, description, id }) => {

  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    dispatch(addFavorite(id))
  }

  return (
  <>
    <article className="img-gallery__card">
      <img src={source} alt={description} />
      <FontAwesomeIcon icon={faHeart} size="xl" style={{color: "#f2f2f2",}} onClick={handleClick} />
      <FontAwesomeIcon icon={faDownload} size="xl" style={{color: "#f2f2f2",}}/>
    </article>
  </>
  );
};

export default Card;
