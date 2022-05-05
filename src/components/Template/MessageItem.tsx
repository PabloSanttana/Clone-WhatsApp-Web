import React from "react";

import styles from "../../styles/MessageItem.module.css";
import Message from "../../model/Message";

interface MessageItemProps {
  data?: Message;
  userId?: string;
}

export default function MessageItem({ data, userId }: MessageItemProps) {
  return (
    <div
      className={styles.messageLine}
      style={{
        justifyContent: data?.author === userId ? "flex-end" : "flex-start",
      }}
    >
      <div
        className={styles.messageItem}
        style={{
          backgroundColor: data?.author === userId ? "#DCf8c6" : "#fff",
        }}
      >
        <div className={styles.messageText}>{data?.body}</div>
        <div className={styles.messageDate}>{data?.date}</div>
      </div>
    </div>
  );
}
