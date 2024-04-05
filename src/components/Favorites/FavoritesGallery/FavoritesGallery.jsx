import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getFavoritesData } from "../../../features/favorites/favoritesSlice.js";
import FavoritesCard from "./FavoritesCard";

const FavoritesGallery = () => {

  const favData = useSelector(getFavoritesData);
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const renderCards = () => {
    return imageList.map((image, index) => {
      return <FavoritesCard key={index} source={image.source} description={image.description} id={image.id} height={image.height} width={image.width} likes={image.likes} created={image.created} />
    })
  }

  useEffect(() => {
    setImageList(favData);
    setIsLoading(false);
  }, [favData]);


  return (
  <section className="img-gallery">
    {isLoading ? 
    <p>Loading...</p> 
      : 
    renderCards()}
  </section>);
};

export default FavoritesGallery;
