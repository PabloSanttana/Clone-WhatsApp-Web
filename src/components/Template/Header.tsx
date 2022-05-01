import React from "react";
import Image from "next/image";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "../../styles/Header.module.css";
import User from "../../model/User";
import useAppData from "../../data/hook/useAppData";

interface Headerprops {
  user?: User;
}

export default function Header(props: Headerprops) {
  const { HancleNewChat } = useAppData();

  function handleGoback() {
    HancleNewChat?.(true);
  }
  return (
    <header className={styles.header}>
      <img
        className={styles.header__avatar}
        src={props.user?.avatar}
        alt="avatar"
      />
      <div className={styles.header__buttons}>
        <div className={styles.header__button}>
          <DonutLargeIcon style={{ color: "#919191" }} />
        </div>
        <div onClick={handleGoback} className={styles.header__button}>
          <ChatIcon style={{ color: "#919191" }} />
        </div>
        <div className={styles.header__button}>
          <MoreVertIcon style={{ color: "#919191" }} />
        </div>
      </div>
    </header>
  );
}
