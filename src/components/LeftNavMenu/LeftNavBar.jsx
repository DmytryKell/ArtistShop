import styles from "../Styles/LeftNavMenu.module.css";
import { React, useState, createContext } from "react";
import NavLinkItems from "./components/NavLinkItems";
import FooterLinkItems from "./components/FooterLinkItems";

import ReactSwitch from "react-switch";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export function LeftNavBar({ navigationtMenuItems, contactItems }) {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light " ? "dark" : "light");
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          className={menuOpen ? styles.menu_bar : styles.open_menu_bar}
          id={theme}
        >
          <div className={styles.header_menu}>
            <div className={styles.burger} onClick={toggleMenu}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <ReactSwitch
                onChange={toggleTheme}
                checked={theme === "dark"}
                onColor="white"
                offHandleColor="#f88307"
                onHandleColor="#fff"
                uncheckedIcon={<MdDarkMode color="black" />}
                checkedIcon={<MdLightMode color="white" />}
                uncheckedHandleIcon={<MdLightMode size="1.5em" color="white" />}
                checkedHandleIcon={<MdDarkMode size="1.5em" color="black" />}
              />
            </div>
            <a href="/">{/* <span>ArtistShop</span> */}</a>
            {/* <div className={styles.user_nav}>
            <div className={styles.user_basket}>
              <div className={styles.score}></div>
            </div>
          </div> */}
          </div>
          <NavLinkItems />
          <FooterLinkItems />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export const ThemeContext = createContext("light");
