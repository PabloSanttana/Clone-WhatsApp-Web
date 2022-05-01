import React from "react";

import styles from "../../styles/ItemList.module.css";

export default function ItemList() {
  return (
    <div className={styles.itemList}>
      <img
        className={styles.itemList__avatar}
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="avatar"
      />
      <div className={styles.itemList__lines}>
        <div className={styles.itemList__line}>
          <div className={styles.itemList__name}>Guilherme Pablo</div>
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
