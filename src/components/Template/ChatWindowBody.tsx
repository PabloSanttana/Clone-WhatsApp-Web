import React, { useState, useEffect, useRef } from "react";

import styles from "../../styles/ChatWindowBody.module.css";
import appData from "../../data/hook/useAppData";
import MessageItem from "./MessageItem";
import useAuth from "../../data/hook/useAuth";

export default function ChatWindowBody() {
  const body = useRef<any>();
  const { chatActive } = appData();
  const { user } = useAuth();
  const [listMessages, setListMessages] = useState([
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem consequuntur asperiores error tempora magni! Reiciendis quaerat quas non asperiores blanditiis amet, alias ex cumque voluptatibus at harum voluptatum eos!",
      date: "19:00",
      authorID: "123",
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem consequuntur asperiores error tempora magni! Reiciendis quaerat quas non asperiores blanditiis amet, alias ex cumque voluptatibus at harum voluptatum eos!",
      date: "19:00",
      authorID: "123",
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem consequuntur asperiores error tempora magni! Reiciendis quaerat quas non asperiores blanditiis amet, alias ex cumque voluptatibus at harum voluptatum eos!",
      date: "19:00",
      authorID: "124",
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem consequuntur asperiores error tempora magni! Reiciendis quaerat quas non asperiores blanditiis amet, alias ex cumque voluptatibus at harum voluptatum eos!",
      date: "19:00",
      authorID: "123",
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem consequuntur asperiores error tempora magni! Reiciendis quaerat quas non asperiores blanditiis amet, alias ex cumque voluptatibus at harum voluptatum eos!",
      date: "19:00",
      authorID: "123",
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem consequuntur asperiores error tempora magni! Reiciendis quaerat quas non asperiores blanditiis amet, alias ex cumque voluptatibus at harum voluptatum eos!",
      date: "19:00",
      authorID: "124",
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem consequuntur asperiores error tempora magni! Reiciendis quaerat quas non asperiores blanditiis amet, alias ex cumque voluptatibus at harum voluptatum eos!",
      date: "19:00",
      authorID: "123",
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem consequuntur asperiores error tempora magni! Reiciendis quaerat quas non asperiores blanditiis amet, alias ex cumque voluptatibus at harum voluptatum eos!",
      date: "19:00",
      authorID: "123",
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem consequuntur asperiores error tempora magni! Reiciendis quaerat quas non asperiores blanditiis amet, alias ex cumque voluptatibus at harum voluptatum eos!",
      date: "19:00",
      authorID: "124",
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem consequuntur asperiores error tempora magni! Reiciendis quaerat quas non asperiores blanditiis amet, alias ex cumque voluptatibus at harum voluptatum eos!",
      date: "19:00",
      authorID: "123",
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem consequuntur asperiores error tempora magni! Reiciendis quaerat quas non asperiores blanditiis amet, alias ex cumque voluptatibus at harum voluptatum eos!",
      date: "19:00",
      authorID: "123",
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem consequuntur asperiores error tempora magni! Reiciendis quaerat quas non asperiores blanditiis amet, alias ex cumque voluptatibus at harum voluptatum eos!",
      date: "19:00",
      authorID: "124",
    },
  ]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [listMessages]);

  return (
    <div ref={body} className={styles.chatWindow__Body}>
      {listMessages.map((item, index) => (
        <MessageItem userId={user?.id} data={item} key={index} />
      ))}
    </div>
  );
}
