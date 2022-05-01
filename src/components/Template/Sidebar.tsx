import useAuth from "../../data/hook/useAuth";
import styles from "../../styles/Siderbar.module.css";

import ChatList from "./ChatList";
import Header from "./Header";
import Search from "./Search";

interface SidebarProps {}

export default function Sidebar(props: SidebarProps) {
  const { user } = useAuth();

  return (
    <div className={styles.sidebar}>
      <Header user={user} />
      <Search />
      <ChatList />
    </div>
  );
}
