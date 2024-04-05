import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, getFavoritesData, getFavoritesStatus, getFavoritesError } from "../../../features/favorites/favoritesSlice.js";
import FavoritesCard from "./FavoritesCard";
import { getFavoriteThunk } from "../../../features/favorites/favoritesThunk.js";


const FavoritesGallery = () => {

  const dispatch = useDispatch();
  const favData = useSelector(getFavoritesData);
  const favStatus = useSelector(getFavoritesStatus);
  const favError = useSelector(getFavoritesError)
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const renderCards = () => {
    return imageList.map((image, index) => {
      return <FavoritesCard key={index} source={image.source} description={image.description} id={image.id} height={image.height} width={image.width} likes={image.likes} created={image.created} />
    })
  }

  useEffect(() => {
    console.log(favData)
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
