import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import User from "../../model/User";
import * as api from "../../services/api";
import { firebase } from "../../services/api";
import Cookies from "js-cookie";

interface AuthContextProps {
  user?: User;
  isLoading?: boolean;
  loginGoogle?: () => Promise<void>;
  loginFacebook?: () => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any) {
  const [user, setUser] = useState<User>(null!);
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  async function loginGoogle() {
    try {
      const response = await api.loginGoogle();
      setUser(response);
      router.push("/");
    } finally {
      console.log("error");
      setLoading(false);
    }
  }
  async function loginFacebook() {
    try {
      const response = await api.loginFacebook();
      setUser(response);
      setLoading(false);
      router.push("/");
    } finally {
      setLoading(false);
    }
  }

  async function configSession(userFirebase: any) {
    if (userFirebase?.email) {
      const user = {
        id: userFirebase?.uid,
        name: userFirebase?.displayName,
        email: userFirebase?.email,
        avatar: userFirebase?.photoURL,
      };
      setUser(user);
      api.gerenciaCookei(true);
      setLoading(false);
      router.push("/");
      return user.email;
    } else {
      setUser(null!);
      api.gerenciaCookei(false);
      setLoading(false);
      return false;
    }
  }

  async function logout() {
    await firebase.auth().signOut();
    api.gerenciaCookei(false);
    setUser(null!);
    setLoading(false);
    router.push("/autenticacao");
  }

  useEffect(() => {
    // firebase detectar id do usuario

    if (Cookies.get("whatsappclone-auth")) {
      const cancelar = firebase.auth().onIdTokenChanged(configSession);
      return () => cancelar();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loginGoogle, loginFacebook, isLoading, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
