import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDownload } from "@fortawesome/free-solid-svg-icons";

const Card = ({ source, description }) => {
  return (
  <>
    <article className="img-gallery__card">
      <img src={source} alt={description} />
      <FontAwesomeIcon icon={faHeart} size="xl" style={{color: "#f2f2f2",}} />
      <FontAwesomeIcon icon={faDownload} size="xl" style={{color: "#f2f2f2",}}/>
    </article>
  </>
  );
};

export default Card;
