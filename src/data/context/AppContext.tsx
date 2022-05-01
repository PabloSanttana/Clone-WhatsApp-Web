import { createContext, useEffect, useState } from "react";

import Chat from "../../model/Chat";

interface AppContextProps {
  chatActive?: Chat;
  activeChat?: (chat: Chat) => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [chat, setChat] = useState<Chat>();

  function activeChat(chat: Chat) {
    setChat(chat);
  }
  return (
    <AppContext.Provider
      value={{
        chatActive: chat,
        activeChat,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
export default AppContext;
