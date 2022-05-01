import React, { useState, useEffect } from "react";

import ItemList from "./ItemList";
import styles from "../../styles/ChatList.module.css";

export default function ChatList() {
  const [lists, setLists] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  return (
    <div className={styles.chatList}>
      {lists.map((item, index) => (
        <ItemList key={index} />
      ))}
    </div>
  );
}
