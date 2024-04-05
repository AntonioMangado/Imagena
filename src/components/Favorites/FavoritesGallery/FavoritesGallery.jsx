import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getFavoritesData } from "../../../features/favorites/favoritesSlice.js";
import FavoritesCard from "./FavoritesCard";

const FavoritesGallery = () => {

  const favData = useSelector(getFavoritesData);
  const [sortType, setSortType] = useState("");
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const renderCards = () => {
    return imageList.map((image, index) => {
      return <FavoritesCard key={index} source={image.source} description={image.description} id={image.id} height={image.height} width={image.width} likes={image.likes} created={image.created} />
    })
  }

  const handleSort = (e) => {
    setSortType(e.target.value);
  }

  useEffect(() => {
    setImageList(favData);
    setIsLoading(false);
  }, [favData]);

  useEffect(() => {
    switch (sortType) {
      case "width":
        setImageList([...imageList].sort((a, b) => a.width - b.width));
        break;
      case "height":
        setImageList([...imageList].sort((a, b) => a.height - b.height));
        break;
      case "likes":
        setImageList([...imageList].sort((a, b) => b.likes - a.likes));
        break;
      case "old":
        setImageList([...imageList].sort((a, b) => new Date(b.created) - new Date(a.created)));
        break;
      default:
        setImageList(favData);
        break;
    }
  }, [sortType]);


  return (
  <section className="img-gallery favorites">
    {isLoading ? 
    <p>Loading...</p>
      : 
    <>
    <select className="img-gallery__sort" onChange={handleSort} value={sortType}>
      <option value="" selected disabled>Sort by</option>
      <option value="width">Width</option>
      <option value="height">Height</option>
      <option value="likes">Most liked</option>
      <option value="old">Newest</option>
    </select> 
    {renderCards()}
    </>
    }
  </section>);
};

export default FavoritesGallery;
