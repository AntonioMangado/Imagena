import { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPencil } from "@fortawesome/free-solid-svg-icons";
import { editImageDescription } from "../../../../../features/images/imagesSlice.js";

const ExpandedView = ({source, description, height, width, likes, created, id, setIsExpanded}) => {

  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const dispatch = useDispatch();

  const handleExpand = () => {
    setIsExpanded(false);
  }

  const handleEditDescription = () => {
    setIsBeingEdited(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target[0].value;
    dispatch(editImageDescription({id, description}));
    setIsBeingEdited(false);
  }

  // const handleKeyDown = (e) => {
  //   console.log(e.key);
  //   if (e.key === "Escape") {
  //     console.log("Escape key pressed");
  //     setIsExpanded(false);
  //   }
  // }

  // onKeyDown={handleKeyDown} tabIndex="0"

  return (
  <article className="img-gallery__expanded-card">
    <div className="expanded-card__container">
      <div className="card-photo">
        <img src={source} alt={description} />
        <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#f2f2f2"}} onClick={handleExpand}/>
      </div>
      
      <div className="card-info">
        <div className="card-info__description">
          <form className={isBeingEdited ? "active" : "hidden"} onSubmit={handleSubmit}>
            <input type="text" placeholder={description}/>
          </form>
          <p className={!isBeingEdited ? "" : "hidden"}>{description}.</p>
          <FontAwesomeIcon icon={faPencil} onClick={handleEditDescription}/>
        </div>

        <div className="card-info__stats">
          <p><b>Height:</b> {height}px</p>
          <p><b>Width:</b> {width}px</p>
          <p><b>Likes:</b> {likes}</p>
          <p><b>Created:</b> {created}</p>
        </div>
      </div>
    </div>
  </article>)
};

export default ExpandedView;
