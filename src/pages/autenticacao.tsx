import React, { useState } from "react";

import useAuth from "../data/hook/useAuth";
import styles from "../styles/autenticacao.module.css";

interface AutenticacaoProps {}

export default function Autenticacao() {
  const { loginGoogle, loginFacebook } = useAuth();

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="https://source.unsplash.com/random"
          alt="imagem da tela de autenticação"
          className={styles.imagem}
        />
      </div>
      <div className={styles.grupoButons}>
        <h1>Entre com a Sua conta</h1>

        <hr className="my-6 border-gray-300 w-full" />
        <br />
        <button onClick={loginGoogle} className={styles.button}>
          Entra com Google
        </button>

        <button onClick={loginFacebook} className={styles.button}>
          Entra com Facebook
        </button>
      </div>
    </div>
  );
}
