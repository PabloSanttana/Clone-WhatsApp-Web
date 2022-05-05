import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import useAuth from "../data/hook/useAuth";
import Loading from "../../public/images/loading.gif";

export default function ProtectionRouter(props: any) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  function renderContent() {
    return (
      <>
        <Head>
          <script
            // segunda verificação para segurança da aplicação
            dangerouslySetInnerHTML={{
              __html: `if(!document.cookie.includes("whatsappclone-auth")){
                window.location.href = "/autenticacao"
            }`,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  }

  function renderLoading() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Image src={Loading} />
      </div>
    );
  }

  if (!isLoading && user?.email) {
    return renderContent();
  } else if (isLoading) {
    return renderLoading();
  } else {
    typeof window !== "undefined" && router.push("/autenticacao");
    return null;
  }
}
