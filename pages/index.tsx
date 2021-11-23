import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home page</title> 
      </Head>
      <div className="container">
      <div className="wrapper">
        <h1>Next JS Starter</h1>
        <h3><a href="https://github.com/IGOR-RAK/NEXT_JS_STARTER" >Git Hub link</a></h3>
        <h2>Stack:</h2>
        <ul>
          <li>
            TypeScript
          </li>
          <li>SCSS</li>
        </ul>
       
          
        {/* <p>public image</p>
        <Image src={kreski} width={1416} height={672} alt="preview"  placeholder="blur" />  
        <p>cloudinary image</p>
        <Image
          src="https://res.cloudinary.com/du9w3xgvx/image/upload/v1637601210/sample.jpg"
          alt="Galaxy"
          width={864}
          height={576}
          // placeholder="blur" 
        /> */}
       
      </div>
      </div>
     </main>
  )
}
