import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faDownload } from "@fortawesome/free-solid-svg-icons";
import { removeFavorite } from "../../../../features/favorites/favoritesSlice";

const FavoritesCard = ({source, description, id}) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeFavorite(id))
  }
  
  return (
  <>
    <article className="img-gallery__card">
      <img src={source} alt={description} />
      <FontAwesomeIcon icon={faTrashCan} size="xl" style={{color: "#f2f2f2",}} onClick={handleClick}/>
      <FontAwesomeIcon icon={faDownload} size="xl" style={{color: "#f2f2f2",}}/>
    </article>
  </>
  );
};
export default FavoritesCard;
