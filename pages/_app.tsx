import { AppProps } from "next/app";
import '../styles/__globals.scss'
import Layout from "../components/Layout"
import Head from "next/head";

const MyApp =({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
        
      </Head>
       <Component {...pageProps} />
    </Layout>
  )
  
 
}

export default MyApp
