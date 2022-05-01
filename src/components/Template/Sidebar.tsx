import styles from "../../styles/Siderbar.module.css";

import ChatList from "./ChatList";
import Header from "./Header";
import Search from "./Search";

interface SidebarProps {}

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Header />
      <Search />
      <ChatList />
    </div>
  );
}
