import { createContext, useEffect, useState } from "react";

import User from "../../model/User";
interface AuthContextProps {
  user?: User;
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any) {
  const [user, setUser] = useState<User>({
    id: "123",
    name: "Pablo Santan",
    email: "pablo@gmail",
    avatar: "http://ambiel.adv.br/wp-content/uploads/2021/07/avatar-user-1.jpg",
  });
  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
