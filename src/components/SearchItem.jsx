import React from "react";
import "./Styles/SearchItem.css"
import {BiSearch} from 'react-icons/bi'

export function SearchItem() {
  return (
    <div className="search-block">
      <select name="" id="">
        <option value="1">Music</option>
        <option value="2">Video</option>
        <option value="3">Pictures</option>
      </select>
      <input type="search" className="search-input" placeholder="Search..." id="" />
      <button><BiSearch size="1.5em"/></button>
    </div>
  );
};

