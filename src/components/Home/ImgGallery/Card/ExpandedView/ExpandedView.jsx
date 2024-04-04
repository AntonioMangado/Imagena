import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ExpandedView = ({source, description, height, width, likes, created, setIsExpanded}) => {

  const handleExpand = () => {
    setIsExpanded(false);
  }

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
      console.log("Escape key pressed");
      setIsExpanded(false);
    }
  }

  return (
  <article className="img-gallery__expanded-card" onKeyDown={handleKeyDown} onClick={handleExpand}>
    <div className="expanded-card__container">
      <div className="card-photo">
        <img src={source} alt={description} />
        <FontAwesomeIcon icon={faXmark} size="xl" style={{color: "#f2f2f2"}} onClick={handleExpand}/>
      </div>
      
      <div className="card-info">
        <p>{description}.</p>
        <div className="card-info__stats">
          <p>Height: {height}px</p>
          <p>Width: {width}px</p>
          <p>Likes: {likes}</p>
          <p>Created: {created}</p>
        </div>
      </div>
    </div>
  </article>)
};

export default ExpandedView;
