import { createContext, useEffect, useState } from "react";

import Chat from "../../model/Chat";

interface AppContextProps {
  chatActive?: Chat;
  activeChat?: (Chat: Chat) => void;
  newChat?: boolean;
  HancleNewChat?: (value: boolean) => void;
  setUsresId?: (value: string[]) => void;
  usersId?: string[];
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [chat, setChat] = useState<Chat>();
  const [showChat, setShowChat] = useState(false);
  const [usersId, setUsresId] = useState<string[]>([]);

  function activeChat(Chat: Chat) {
    setChat(Chat);
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
        setUsresId,
        usersId,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
export default AppContext;
