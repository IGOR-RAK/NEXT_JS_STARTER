import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Head from 'next/head'
import Image from 'next/image'



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
       
        <h1>Next JS Starter</h1>      
        
        <div className="stack_box">
          <h2>Stack:</h2>
          <div className="items">         
            {set.map(item=><p className="item" key={item}>{item}</p>)}
          </div>        
        </div>

        <div className="stack_box">
          <h3>
            <a href={github_link} >GitHub link:</a>
          </h3>
          <p>
            <a href={github_link} >github.com/IGOR-RAK/NEXT_JS_STARTER</a>
          </p>
        </div>
          
      
       
      </div>
      </div>
     </main>
  )
}
