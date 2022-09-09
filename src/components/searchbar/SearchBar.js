import React, {  useState,  } from "react";
import "./SearchBar.css";
import {  useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  // const { getImages } = useContext(ImgContext);
  const navigate = useNavigate();

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const imageSearchHandler = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      navigate(`/search/${search}`, { replace: true });
      // getImages(search);
    }
  };

  return (
    <div>
      <form className="search-form" onSubmit={(e) => imageSearchHandler(e)}>
        <input
          type="text"
          className="input-search"
          placeholder="Search..."
          onChange={(e) => searchHandler(e)}
        />
        <button className="search-button">
          <svg height="32" width="32">
            <path
              d="M 19.427 21.427 a 8.5 8.5 0 1 1 2 -2 l 5.585 5.585 c 0.55 0.55 0.546 1.43 0 1.976 l -0.024 0.024 a 1.399 1.399 0 0 1 -1.976 0 l -5.585 -5.585 Z M 14.5 21 a 6.5 6.5 0 1 0 0 -13 a 6.5 6.5 0 0 0 0 13 Z"
              fill="#FFF"
              fillRule="venodd"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
}
