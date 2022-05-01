import React from "react";

import styles from "../../styles/MessageItem.module.css";

interface MessageItemProps {
  data: { body?: string; date?: string; authorID?: string };
  userId?: string;
}

export default function MessageItem({ data, userId }: MessageItemProps) {
  return (
    <div
      className={styles.messageLine}
      style={{
        justifyContent: data.authorID === userId ? "flex-end" : "flex-start",
      }}
    >
      <div
        className={styles.messageItem}
        style={{
          backgroundColor: data.authorID === userId ? "#DCf8c6" : "#fff",
        }}
      >
        <div className={styles.messageText}>{data.body}</div>
        <div className={styles.messageDate}>{data.date}</div>
      </div>
    </div>
  );
}
