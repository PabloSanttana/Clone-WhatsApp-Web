import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import styles from "../../styles/Search.module.css";
export default function ChatWindow() {
  return (
    <div className={styles.search}>
      <div className={styles.search__input}>
        <SearchIcon fontSize="small" style={{ color: "#919191" }} />
        <input
          type="search"
          placeholder="Pesquisar ou começar uma nova conversa."
        />
      </div>
    </div>
  );
}
