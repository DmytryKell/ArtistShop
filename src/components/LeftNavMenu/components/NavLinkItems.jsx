import React from "react";
import styles from "../../Styles/LeftNavMenu.module.css";
import userIcon from "../Icons/user.svg";
import audioIcon from "../Icons/audio.svg";
import videoIcon from "../Icons/video.svg";
import pictureIcon from "../Icons/picture.svg";
import folderIcon from "../Icons/folder-collection.svg";
import heartIcon from "../Icons/heart.svg";

export default function NavLinkItems() {
  const navigationtMenuItems = [
    {
      value: "Profile",
      href: "./Profile",
      icon: userIcon,
    },
    {
      value: "Music",
      href: "./Music",
      icon: audioIcon,
    },
    {
      value: "Video",
      href: "./Video",
      icon: videoIcon,
    },
    {
      value: 'Picture',
      href: "./Picture",
      icon: pictureIcon,
    },
    {
      value: "Collection",
      href: "./Collections",
      icon: folderIcon,
    },
    {
      value: "Favorite",
      href: "./Favorite",
      icon: heartIcon,
    },
  ];

  return (
    <>
      
        <div className={styles.nav_bar}>
          <ul>
            {navigationtMenuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>
                  <span>
                    <img className={styles.icons} src={item.icon} alt="" />
                  </span>
                  <span>{item.value}</span>
                </a>
              </li>
            ))}
          </ul>
          
        </div>
      
    </>
  );
}
