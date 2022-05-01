import { createContext, useEffect, useState } from "react";

interface AuthContextProps {
  name?: string;
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any) {
  return (
    <AuthContext.Provider value={{ name: "pablo" }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
