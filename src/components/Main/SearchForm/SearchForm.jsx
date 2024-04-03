import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImagesData, getImagesStatus, getImagesError } from '../../../features/images/imagesSlice.js';
import { getImagesThunk } from "../../../features/images/imagesThunk";


const SearchForm = () => {

  // const dispatch = useDispatch();
  // const imagesData = useSelector(getImagesData);
  // const imagesStatus = useSelector(getImagesStatus);
  // const imagesError = useSelector(getImagesError)
  // const [imageList, setImageList] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (imagesStatus === "idle") {
  //     dispatch(getImagesThunk());
  //   } else if (imagesStatus === "pending") {
  //     setLoading(true);
  //   } else if (imagesStatus === "fulfilled") {
  //     setLoading(false);
  //     let data = [];
  //     imagesData.forEach((image) => {
  //       data.push(image);
  //     })
  //     setImageList(data);
  //   } else if (imagesStatus === "rejected") {
  //     setLoading(false);
  //     console.log(imagesError)
  //   }
  // }, [dispatch, imagesData, imagesStatus, imagesError]);

  return (
  <section className="search">
    <h1 className="search__title">Unbelievable images to download</h1>
    <p className="search__text">Over 1 million images shared by our talented community.</p>
    <form className="search__form">
      <input type="text" className="search__input" placeholder="Search images" />
    </form>
  </section>
  );
};

export default SearchForm;
