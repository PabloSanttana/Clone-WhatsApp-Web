import React from "react";
import Image from "next/image";

import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "../../styles/ChatHeader.module.css";
import Chat from "../../model/Chat";

interface ChatHeaderProps {
  chat?: Chat;
}

export default function ChatHeader(props: ChatHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.header__info}>
        <img
          className={styles.header__avatar}
          src={props.chat?.image!}
          alt="avatar"
        />
        <span>{props.chat?.title}</span>
      </div>

      <div className={styles.header__buttons}>
        <div className={styles.header__button}>
          <SearchIcon style={{ color: "#919191" }} />
        </div>

        <div className={styles.header__button}>
          <MoreVertIcon style={{ color: "#919191" }} />
        </div>
      </div>
    </header>
  );
}
