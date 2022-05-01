import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../data/context/AuthContext";
import { AppProvider } from "../data/context/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}

export default MyApp;
