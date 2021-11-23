import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/404.module.scss";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
      
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <main>
      <Head>
        <title>Error</title>
      </Head>
      <div className="container">
        <div className="wrapper">
          <h1>404</h1>
          <h2>Something is going wrong...</h2>     
        </div>
      </div>
    </main>
  )
};

export default Error;