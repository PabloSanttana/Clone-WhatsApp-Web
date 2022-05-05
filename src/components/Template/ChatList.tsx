import React, { useState, useEffect } from "react";

import ItemList from "./ItemList";
import styles from "../../styles/ChatList.module.css";

import appData from "../../data/hook/useAppData";
import Chat from "../../model/Chat";
import * as api from "../../services/api";
import useAuth from "../../data/hook/useAuth";

export default function ChatList() {
  const [lists, setLists] = useState<Chat[]>([]);

  const { activeChat, chatActive } = appData();
  const { user } = useAuth();

  useEffect(() => {
    if (user !== null) {
      let unSub = api.onChatsList(user?.id!, setLists);
      return unSub;
    }
  }, [user]);

  function handleSelectChat(item: Chat) {
    activeChat?.(item);
  }

  return (
    <div className={styles.chatList}>
      {lists.map((item, index) => (
        <ItemList
          active={chatActive?.chatId === item.chatId}
          select={() => handleSelectChat(item)}
          data={item}
          key={index}
        />
      ))}
    </div>
  );
}
