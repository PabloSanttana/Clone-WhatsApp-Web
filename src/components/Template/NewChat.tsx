import React, { useState } from "react";

import styles from "../../styles/NewChat.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useAppData from "../../data/hook/useAppData";

export default function NewChat() {
  const { newChat, HancleNewChat } = useAppData();

  const [list, setList] = useState([
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Pablo Santana 2",
    },
    {
      id: 124,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Pablo Santana 3",
    },
    {
      id: 125,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Pablo Santana 4",
    },
    {
      id: 126,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Pablo Santana 5",
    },
    {
      id: 127,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Pablo Santana 6",
    },
  ]);
  return (
    <>
      <div
        className={styles.newChat}
        style={{
          left: newChat ? "0" : "-415px",
        }}
      >
        <div className={styles.newChat__head}>
          <div
            onClick={() => HancleNewChat?.(false)}
            className={styles.newChat__goback}
          >
            <ArrowBackIcon style={{ color: "#fff" }} />
          </div>
          <div className={styles.newChat__headTitle}>Nova Conversa</div>
        </div>
        <div className={styles.newChat__list}>
          {list.map((item, index) => (
            <div className={styles.newChat__item} key={index}>
              <img className={styles.newChat__itemAvatar} src={item.avatar} />
              <div className={styles.newChat__itemName}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={styles.newChat}
        style={{
          left: "-415px",
          backgroundColor: "#d2dcdc",
        }}
      ></div>
    </>
  );
}
