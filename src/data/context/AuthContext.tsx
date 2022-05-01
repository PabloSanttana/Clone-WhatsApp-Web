import { createContext, useEffect, useState } from "react";

interface AuthContextProps {
  name?: string;
  id?: number;
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any) {
  return (
    <AuthContext.Provider value={{ name: "Santana" }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
