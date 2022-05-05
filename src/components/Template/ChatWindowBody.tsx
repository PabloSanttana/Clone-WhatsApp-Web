import React, { useState, useEffect, useRef } from "react";

import styles from "../../styles/ChatWindowBody.module.css";
import appData from "../../data/hook/useAppData";
import MessageItem from "./MessageItem";
import useAuth from "../../data/hook/useAuth";
import * as api from "../../services/api";
import Message from "../../model/Message";

export default function ChatWindowBody() {
  const body = useRef<any>();
  const { chatActive, setUsresId } = appData();
  const { user } = useAuth();
  const [listMessages, setListMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [listMessages]);

  useEffect(() => {
    setListMessages([]);
    let unsub = api.onChatList(
      chatActive?.chatId!,
      setListMessages,
      setUsresId!
    );
    return unsub;
  }, [chatActive?.chatId!]);

  return (
    <div ref={body} className={styles.chatWindow__Body}>
      {listMessages.map((item, index) => (
        <MessageItem userId={user?.id!} data={item} key={index} />
      ))}
    </div>
  );
}
