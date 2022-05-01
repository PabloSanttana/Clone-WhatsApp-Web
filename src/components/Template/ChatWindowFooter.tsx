import { useState } from "react";
import dynamic from "next/dynamic";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";

// biblioteca dinamica
const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

import styles from "../../styles/ChatWindowFooter.module.css";

export default function ChatWindowFooter() {
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");

  const onEmojiClick = (event: any, emojiObject: any) => {
    setMessage(message + emojiObject.emoji);
  };

  return (
    <>
      <div
        className={styles.chatWindow__emojiarea}
        style={{ height: showEmoji ? "300px" : "0px" }}
      >
        <EmojiPicker
          onEmojiClick={onEmojiClick}
          disableSearchBar
          disableSkinTonePicker
          pickerStyle={{ width: "100%" }}
        />
      </div>

      <div className={styles.chatWindowFooter}>
        <div className={styles.chatWindowFooter__pre}>
          <div
            onClick={() => setShowEmoji(false)}
            className={styles.ChatWindow__button}
            style={{ width: showEmoji ? 40 : 0 }}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>
          <div
            onClick={() => setShowEmoji(true)}
            className={styles.ChatWindow__button}
          >
            <InsertEmoticonIcon
              style={{ color: showEmoji ? "#009688" : "#919191" }}
            />
          </div>

          <div className={styles.ChatWindow__button}>
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
        </div>

        <div className={styles.chatWindowFooter__inputarea}>
          <input
            placeholder="Messagem"
            className={styles.chatWindow__input}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className={styles.chatWindowFooter__pos}>
          {message.length > 0 ? (
            <div className={styles.ChatWindow__button}>
              <SendIcon style={{ color: "#919191" }} />
            </div>
          ) : (
            <div className={styles.ChatWindow__button}>
              <MicIcon style={{ color: "#919191" }} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
