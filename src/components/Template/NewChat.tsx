import React, { useState, useEffect } from "react";

import styles from "../../styles/NewChat.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useAppData from "../../data/hook/useAppData";
import useAuth from "../../data/hook/useAuth";
import * as api from "../../services/api";
import User from "../../model/User";
import Chat from "../../model/Chat";

export default function NewChat() {
  const { newChat, HancleNewChat } = useAppData();
  const { user } = useAuth();
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [list, setList] = useState<User[]>([]);

  useEffect(() => {
    setIsLoadingList(true);
    handleGetContact();
  }, [user]);

  async function handleGetContact() {
    const response = await api.getContactList(user?.id!);
    setIsLoadingList(false);
    setList(response);
  }

  async function handleaddNewChat(item: User) {
    let verify: number = null;
    /*  await api.onChatsList(user?.id!, async function (list: Chat[]) {
      verify = list.findIndex((i: Chat) => i.with === item.id);

      if (verify === -1) {
        await api.addnewChat(user!, item);
      }

      return;
    }); */
    // await api.addnewChat(user!, item);
    HancleNewChat?.(false);
  }

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
        {isLoadingList ? (
          <div className={styles.newChat__list}>Carregando...</div>
        ) : (
          <div className={styles.newChat__list}>
            {list.map((item, index) => (
              <div
                onClick={() => handleaddNewChat(item)}
                className={styles.newChat__item}
                key={index}
              >
                <img
                  className={styles.newChat__itemAvatar}
                  src={item.avatar!}
                />
                <div className={styles.newChat__itemName}>{item.name}</div>
              </div>
            ))}
          </div>
        )}
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
