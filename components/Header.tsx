import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import Navbar from "./Navbar";
import styles from "../styles/Header.module.scss";

const Header:FC=() => {
    return (  
    <header>
        <BrowserView>
        <div className={styles.container}>
            
            <div className={styles.logo}> 
            <Link href={`/`}>         
                  <Image src="/logo.png" width={60} height={60} alt="webDev" />
             </Link>    
             
            </div>
           
    
                 <Navbar/> 
            </div>
        </BrowserView>
        <MobileView>
        <div className={styles.container}>
            
            <div className={styles.logo}> 
            <Link href={`/`}>         
                  <Image src="/logo.png" width={30} height={30} alt="webDev" />
             </Link>    
             
            </div>
           
    
                 <Navbar/> 
            </div>
        </MobileView>
       
            
    </header>);
}

export default Header;