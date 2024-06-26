import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveAs } from "file-saver";
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDownload } from "@fortawesome/free-solid-svg-icons";
import { addFavorite } from "../../../../features/favorites/favoritesSlice.js";
import ExpandedView from "./ExpandedView/ExpandedView.jsx";


const Card = ({ source, description, id, height, width, likes, created }) => {

  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  const handleClick = () => {
    dispatch(addFavorite({id, source, description, height, width, likes, created}))
  }

  const handleDownload = () => {
    saveAs(source, `${id}.jpg`);
  }

  return (
    <>
    {isExpanded ? (
      <ExpandedView source={source} description={description} height={height} width={width} likes={likes} created={created} id={id} setIsExpanded={setIsExpanded}/>
    ) : (
      <>
        <article className="img-gallery__card" >
          <img src={source} alt={description} onClick={handleExpand}/>
          <FontAwesomeIcon icon={faHeart} size="xl" style={{color: "#f2f2f2"}} onClick={handleClick}/>
          <FontAwesomeIcon icon={faDownload} size="xl" style={{color: "#f2f2f2"}} className="download" onClick={handleDownload}/>
        </article>
      </>
    )}
  </>
  );
};

export default Card;
