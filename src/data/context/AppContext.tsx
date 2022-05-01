import { createContext, useEffect, useState } from "react";

import Chat from "../../model/Chat";

interface AppContextProps {
  chatActive?: Chat;
  activeChat?: (chat: Chat) => void;
  newChat?: boolean;
  HancleNewChat?: (value: boolean) => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [chat, setChat] = useState<Chat>();
  const [showChat, setShowChat] = useState(true);

  function activeChat(chat: Chat) {
    setChat(chat);
  }
  function HancleNewChat(value: boolean) {
    setShowChat(value);
  }
  return (
    <AppContext.Provider
      value={{
        chatActive: chat,
        activeChat,
        newChat: showChat,
        HancleNewChat,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
export default AppContext;
