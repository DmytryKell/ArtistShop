import React from "react";
import styles from "../../Styles/LeftNavMenu.module.css";
import github from '../Icons/github.svg';
import telegram from '../Icons/telegram.svg';
import patreon from '../Icons/patreon.svg';

export default function FooterLinkItems() {
//   const contactItems = [
//     { href: "github.com", icon: github },
//     { href: "telegram.me", icon: telegram },
//     // { href: "patreon.com", icon: patreon },
//   ];

  return (
    <>
      <div className={styles.footer_menu}>
        <div className="contacts">
          <ul>
              <li >
                <a href="github.com">
                    <img className={styles.icons} src={github} alt="" />
                </a>
                <a href="telegram.me">
                    <img className={styles.icons} src={telegram} alt="" />
                </a>
                <a href="patreon.com">
                    <img className={styles.icons} src={patreon} alt="" />
                </a>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
}
