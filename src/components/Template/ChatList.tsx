import React, { useState, useEffect } from "react";

import ItemList from "./ItemList";
import styles from "../../styles/ChatList.module.css";

import appData from "../../data/hook/useAppData";
import Chat from "../../model/Chat";

export default function ChatList() {
  const [lists, setLists] = useState<Chat[]>([
    {
      chatId: 1,
      title: "Fulano de Tal 1",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 2,
      title: "Fulano de Tal 2",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 3,
      title: "Fulano de Tal 3",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 4,
      title: "Fulano de Tal 4",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 5,
      title: "Fulano de Tal 5",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      chatId: 6,
      title: "Fulano de Tal 6",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ]);

  const { activeChat, chatActive } = appData();

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
