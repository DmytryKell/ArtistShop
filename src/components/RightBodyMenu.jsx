import React from "react";
import "./Styles/RightBodyMenu.css";
import { VideoPlayer } from "./Video/Video";
import { SearchItem } from "./SearchItem";
import { Picture } from "./Picture/Picture";

export function RightBodyMenu() {
  return (
    <div className="components-body">
      <div className="container">
        <SearchItem />
        {/* <VideoPlayer /> */}
        <Picture />
      </div>
    </div>
  );
}
