import React, { createContext, useState } from "react";
import axios from "axios";

export const ImgContext = createContext();

export default function ImagesContextProvider(props) {
  const [images, setImages] = useState([]);
  const[loading,setLoading] =useState(true)
  const getImages = async (searchItem) => {

    await axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&format=json&nojsoncallback=1&text=${searchItem}&per_page=24_w`
      )
      .then((res) => {
        setImages(res?.data?.photos?.photo);
        setLoading(false)
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ImgContext.Provider value={{  images, getImages ,loading}}>
      {props.children}``
    </ImgContext.Provider>
  );
}
