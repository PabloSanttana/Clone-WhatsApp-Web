import React, { useState, useEffect } from "react";

import styles from "../../styles/ContentArea.module.css";

import ChatIntro from "./ChatIntro";
import ChatWindow from "./ChatWindow";
import appData from "../../data/hook/useAppData";

export default function ContentArea() {
  const { chatActive } = appData();

  return (
    <div className={styles.contentarea}>
      {chatActive?.chatId !== undefined ? <ChatWindow /> : <ChatIntro />}
    </div>
  );
}
