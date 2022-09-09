import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ImgContext } from "../context/ImagesContext";
import "./Navbar.css";

export default function Navbar({ searchItem }) {
  const { getImages } = useContext(ImgContext);
  useEffect(() => {
    getImages(searchItem);
  }, [searchItem]);

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/mountain">Mountain</Link>
        </li>
        <li>
          <Link to="/beach">Beaches</Link>
        </li>
        <li>
          <Link to="/bird">Birds</Link>
        </li>
        <li>
          <Link to="/food">Food</Link>
        </li>
      </ul>
    </nav>
  );
}
