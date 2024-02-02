import "./CategorieItem.css";
import React, { useState } from "react";
import {Link} from 'react-router-dom'


const CategorieItem = ({ item }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };
  return (
    <div className="CategorieItem">

        <img
          src={item.img}
          alt=""
          className={`zoomable-image ${isZoomed ? "zoomed" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      <div className="CategorieItemTextContainer">
        <div className="CategorieItemTitle">{item.title}</div>
        <Link to='/product'><button className="CategorieItemButton">SHOP NOW</button></Link>
      </div>
    </div>
  );
};

export default CategorieItem;
