import { useState } from "react";
import dynamic from "next/dynamic";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import * as api from "../../services/api";

// biblioteca dinamica
const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

import styles from "../../styles/ChatWindowFooter.module.css";
import useAppData from "../../data/hook/useAppData";
import useAuth from "../../data/hook/useAuth";

export default function ChatWindowFooter() {
  let recognition: any = null;
  let speechRecognition: any =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (speechRecognition !== undefined) {
    recognition = new speechRecognition();
  }
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const [listening, setListening] = useState(false);

  const { chatActive, usersId } = useAppData();
  const { user } = useAuth();

  const onEmojiClick = (event: any, emojiObject: any) => {
    setMessage(message + emojiObject.emoji);
  };

  function handleMicClick() {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (e: any) => {
        setMessage(e.results[0][0].transcript);
      };
      recognition.start();
    }
  }

  function handleSendClick() {
    if (message !== "") {
      api.sendMessage(chatActive!, user?.id!, "text", message, usersId!);
      setMessage("");
      setShowEmoji(false);
    }
  }

  function handleInputKeyUp(e) {
    let verify = e.keyCode === 13;
    if (verify) {
      handleSendClick();
    }
  }

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
            onKeyUp={handleInputKeyUp}
          />
        </div>

        <div className={styles.chatWindowFooter__pos}>
          {message.length > 0 ? (
            <div
              onClick={handleSendClick}
              className={styles.ChatWindow__button}
            >
              <SendIcon style={{ color: "#919191" }} />
            </div>
          ) : (
            <div onClick={handleMicClick} className={styles.ChatWindow__button}>
              <MicIcon style={{ color: listening ? "#009688" : "#919191" }} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
