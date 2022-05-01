import React from "react";
import Chat from "../../model/Chat";

import styles from "../../styles/ItemList.module.css";

interface ItemListProps {
  select: () => void;
  active: boolean;
  data: Chat;
}

export default function ItemList(props: ItemListProps) {
  return (
    <div
      onClick={props.select}
      className={`${styles.itemList} ${props.active && styles.active} }`}
    >
      <img
        className={styles.itemList__avatar}
        src={props.data.image}
        alt="avatar"
      />
      <div className={styles.itemList__lines}>
        <div className={styles.itemList__line}>
          <div className={styles.itemList__name}>{props.data.title}</div>
          <div className={styles.itemList__date}>00:00</div>
        </div>
        <div className={styles.itemList__line}>
          <div className={styles.itemList__lastMsg}>
            <p>Opa, Tudo bem?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
