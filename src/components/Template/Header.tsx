import React from "react";
import Image from "next/image";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "../../styles/Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.header__avatar}
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="avatar"
      />
      <div className={styles.header__buttons}>
        <div className={styles.header__button}>
          <DonutLargeIcon style={{ color: "#919191" }} />
        </div>
        <div className={styles.header__button}>
          <ChatIcon style={{ color: "#919191" }} />
        </div>
        <div className={styles.header__button}>
          <MoreVertIcon style={{ color: "#919191" }} />
        </div>
      </div>
    </header>
  );
}
