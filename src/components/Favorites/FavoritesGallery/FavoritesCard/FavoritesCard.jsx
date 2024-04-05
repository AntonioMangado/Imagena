import { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faDownload } from "@fortawesome/free-solid-svg-icons";
import { removeFavorite } from "../../../../features/favorites/favoritesSlice";
import ExpandedView from "../../../Home/ImgGallery/Card/ExpandedView";

const FavoritesCard = ({source, description, id, height, width, likes, created}) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeFavorite(id))
  }

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  }
  
  return (
  <>
  {isExpanded ? (
    <ExpandedView source={source} description={description} height={height} width={width} likes={likes} created={created} id={id} setIsExpanded={setIsExpanded}/>
  ) : (
    <article className="img-gallery__card">
      <img src={source} alt={description} onClick={handleExpand}/>
      <FontAwesomeIcon icon={faTrashCan} size="xl" style={{color: "#f2f2f2",}} onClick={handleClick}/>
      <FontAwesomeIcon icon={faDownload} size="xl" style={{color: "#f2f2f2",}}/>
    </article>
  )}
    
  </>
  );
};
export default FavoritesCard;
