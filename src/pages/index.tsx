import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Sidebar from "../components/Template/Sidebar";
import ContentArea from "../components/Template/ContentArea";

const Home: NextPage = () => {
  return (
    <div className={styles.app_window}>
      <Sidebar />
      <ContentArea />
    </div>
  );
};

export default Home;
