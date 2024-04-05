import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAs } from "file-saver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faDownload } from "@fortawesome/free-solid-svg-icons";
import { removeFavorite } from "../../../../features/favorites/favoritesSlice";
import ExpandedView from "../../../Home/ImgGallery/Card/ExpandedView";

const FavoritesCard = ({source, description, id, height, width, likes, created}) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeFavorite(id))
    toast.info("Image removed from favorites.", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handleDownload = () => {
    saveAs(source, `${id}.jpg`);
  }

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  }
  
  return (
  <>
  {isExpanded ? (
    <ExpandedView source={source} description={description} height={height} width={width} likes={likes} created={created} id={id} setIsExpanded={setIsExpanded}/>
  ) : (
    <>
      <article className="img-gallery__card">
        <ToastContainer />
        <img src={source} alt={description} onClick={handleExpand}/>
        <FontAwesomeIcon icon={faTrashCan} size="xl" style={{color: "#f2f2f2",}} onClick={handleClick}/>
        <FontAwesomeIcon icon={faDownload} size="xl" style={{color: "#f2f2f2",}} onClick={handleDownload} className="download"/>
      </article>
    </>
    
  )}
    
  </>
  );
};
export default FavoritesCard;
