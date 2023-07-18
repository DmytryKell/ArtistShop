import styles from "../Styles/LeftNavMenu.module.css";
import React, { useState } from "react";
import NavLinkItems from "./components/NavLinkItems";
import FooterLinkItems from "./components/FooterLinkItems";

export function LeftNavBar({ navigationtMenuItems, contactItems }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={menuOpen ? styles.menu_bar : styles.open_menu_bar}>
        <div className={styles.header_menu}>
          <div className={styles.burger} onClick={toggleMenu}>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <a href="/">
            {/* <span>ArtistShop</span> */}
          </a>
          <div className={styles.user_nav}>
            <div className={styles.user_basket}>
              <div className={styles.score}></div>
            </div>
          </div>
        </div>
        <NavLinkItems />
        <FooterLinkItems />
      </div>
    </>
  );
}
