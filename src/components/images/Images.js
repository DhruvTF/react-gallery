import React, { useContext } from "react";
import ImagesCard from "../imagesCard/ImagesCard";
import Loader from "../loader/Loader";
import { ImgContext } from "../context/ImagesContext";
// css
import "./Images.css";
import NoImages from "../noImages/NoImages";
export default function Images({ searchItem }) {
  const { images, loading } = useContext(ImgContext);
  //  console.log(loading,"loading")
  return (
    <div className="photos">
      <h2
        style={{
          fontSize: "2em",
          margin: "52px 0px 40px",
          textTransform: "capitalize",
          color: "#051c33",
        }}
      >
        {/* decodeURI for removing spaces */}
        {decodeURI(searchItem)} Images
      </h2>
      {loading ? (
        <Loader />
      ) : images?.length > 0 ? (
        <ul>
          {images?.map((image) => (
            <li key={image?.id}>
              <ImagesCard image={image} />
            </li>
          ))}
        </ul>
      ) : (
        <NoImages />
      )}
    </div>
  );
}
