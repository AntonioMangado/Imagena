import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImagesData, getImagesStatus, getImagesError } from '../../../features/images/imagesSlice.js';
import { getImagesThunk } from "../../../features/images/imagesThunk";
import Card from "./Card";


const ImgGallery = () => {

  const dispatch = useDispatch();
  const imagesData = useSelector(getImagesData);
  const imagesStatus = useSelector(getImagesStatus);
  const imagesError = useSelector(getImagesError)
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);

  const renderCards = () => {
    return imageList.map((image, index) => {
      return <Card key={index} source={image.source} description={image.alt} />
    })
  }

  useEffect(() => {
    if (imagesStatus === "idle") {
      dispatch(getImagesThunk());
    } else if (imagesStatus === "pending") {
      setLoading(true);
    } else if (imagesStatus === "fulfilled") {
      setLoading(false);
      let data = [];
      console.log(imagesData)
      imagesData.forEach((image) => {
        data.push({source: image.urls.regular, alt: image.slug});
      })
      setImageList(data);
    } else if (imagesStatus === "rejected") {
      setLoading(false);
      console.log(imagesError)
    }
  }, [dispatch, imagesData, imagesStatus, imagesError]);


  return (
  <section className="img-gallery">
    {loading ? 
    <p>Loading...</p> 
      : 
    renderCards()}
  </section>);
};

export default ImgGallery;
