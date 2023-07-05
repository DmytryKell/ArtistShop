import React from "react";
import "./Styles/SearchItem.css"

export function SearchItem() {
  return (
    <div className="search-block">
      <select name="" id="">
        <option value="1">Music</option>
        <option value="2">Video</option>
        <option value="3">Pictures</option>
      </select>
      <input type="search" className="search-input" id="" />
      <button>S</button>
    </div>
  );
};

