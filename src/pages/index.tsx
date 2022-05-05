import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Sidebar from "../components/Template/Sidebar";
import ContentArea from "../components/Template/ContentArea";
import NewChat from "../components/Template/NewChat";

import Layout from "../components/Template/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.app_window}>
        <NewChat />
        <Sidebar />
        <ContentArea />
      </div>
    </Layout>
  );
};

export default Home;
