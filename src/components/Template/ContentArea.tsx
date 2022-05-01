import React, { useState, useEffect } from "react";

import styles from "../../styles/ContentArea.module.css";

import ChatIntro from "./ChatIntro";
import ChatWindow from "./ChatWindow";
interface ContentAreaProps {}

interface Chat {
  chatId: number;
}

export default function ContentArea() {
  const [activeChat, setActiveChat] = useState<Chat>({ chatId: 0 });
  return (
    <div className={styles.contentarea}>
      {activeChat.chatId !== 0 ? <ChatWindow /> : <ChatIntro />}
    </div>
  );
}
