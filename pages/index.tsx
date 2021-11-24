import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


const set = ["TypeScript","SCSS","SSR","SSG","Axios","React-device-detect","SEO","Cloudinary","JSONplaceholder"]
const github_link = "https://github.com/IGOR-RAK/NEXT_JS_STARTER"

export default function Home() {

   

  return (
    <main>
      <Head>
        <title>Home page</title> 
      </Head>
      <div className="container">
       
      <div className="wrapper">
        <div className={styles.dempher}></div>
        <h1>Next JS Starter</h1>      
        
        <div className={styles.stack_box}>
        <h2>Stack:</h2>
        <div className={styles.items}>         
          {set.map(item=><p className={styles.item} key={item}>{item}</p>)}
        </div>
        </div>
        <div className={styles.stack_box}>
        <h3>
          <a href={github_link} >GitHub link:</a>
        </h3>
        <p>
          <a href={github_link} >https://github.com/IGOR-RAK/NEXT_JS_STARTER</a>
        </p>

        </div>
          
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
