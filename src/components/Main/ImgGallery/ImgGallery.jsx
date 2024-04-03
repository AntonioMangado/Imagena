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

  useEffect(() => {
    if (imagesStatus === "idle") {
      dispatch(getImagesThunk());
    } else if (imagesStatus === "pending") {
      setLoading(true);
    } else if (imagesStatus === "fulfilled") {
      setLoading(false);
      let data = [];
      imagesData.forEach((image) => {
        data.push(image);
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
    <Card />}
  </section>);
};

export default ImgGallery;
