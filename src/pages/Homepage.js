import React from "react";
// components
import SearchBar from "../components/searchbar/SearchBar";
import Navbar from "../components/navbar/Navbar";
import Images from "../components/images/Images";
// css
import "./Homepage.css";

export default function Homepage({ searchItem }) {
  return (
    <>
      <div className="container">
        <SearchBar searchItem={searchItem} />
        <Navbar searchItem={searchItem} />
        <Images searchItem={searchItem} />
      </div>
    </>
  );
}
