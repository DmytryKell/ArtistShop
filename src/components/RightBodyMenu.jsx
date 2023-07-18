import React from "react";
import { Routes, Route } from "react-router-dom";

import "./Styles/RightBodyMenu.css";

import { SearchItem } from "./SearchItem";

import { Profile } from "../components/Profile";
import { Music } from "../components/Music/Music";
import { VideoPlayer } from "../components/Video/Video";
import { Picture } from "../components/Picture/Picture";
import { Collections } from "../components/Collections";
import { Favorite } from "../components/Favorite";

export function RightBodyMenu() {
  return (
    <>
      <div className="components-body">
        <div className="container">
          <SearchItem />
          <Routes>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Video" element={<VideoPlayer />} />
            <Route path="/Picture" element={<Picture />} />
            <Route path="/Collections" element={<Collections />} />
            <Route path="/Favorite" element={<Favorite />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
