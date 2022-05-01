import React from "react";

import styles from "../../styles/ChatWindow.module.css";
import appData from "../../data/hook/useAppData";
import ChatHeader from "./ChatHeader";
import ChatWindowBody from "./ChatWindowBody";
import ChatWindowFooter from "./ChatWindowFooter";

export default function ChatWindow() {
  const { chatActive } = appData();
  return (
    <div className={styles.chatWindow}>
      <ChatHeader chat={chatActive} />
      <ChatWindowBody />
      <ChatWindowFooter />
    </div>
  );
}
