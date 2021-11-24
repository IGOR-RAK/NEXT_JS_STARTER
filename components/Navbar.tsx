import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import { useState } from 'react';


const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'SSG', path: '/posts' },
     { id: 3, title: 'SSR', path: '/contacts' },
     { id: 4, title: 'Images', path: '/images' },
  ];

const Navbar = () => {
    const { pathname } = useRouter();
    
    const [menu,setMenu] = useState(false)

  
    return (
      <nav className={styles.nav}>
         <BrowserView>
         <div className={styles.links}>
          {navigation.map(({ id, title, path }) => (
            <Link key={id} href={path}>
              <a className={pathname === path ? styles.active : null}>{title}</a>
            </Link>
          ))}
          <Link  href={'/images'}>
              <a className={pathname === '/images' ? styles.active : null}>Images</a>
          </Link>
            
        </div>
        </BrowserView>
        <MobileView>
            <div className={styles.menu__icon} onClick={()=>{setMenu(!menu)}}><span></span></div>
            {menu&&<div className="menu"> 
             {navigation.map(({id, title, path})=>{ return (<h1 className={styles.item}
              onClick={()=>{setMenu(!menu)}}>              
               <Link  key={id }href={path}>
               <a>{title}</a>
           </Link>
           </h1>)
               
             })}
            
            </div>}

            {/* <div className="menu__icon _active"><span></span></div> */}
        </MobileView>
        
        
      </nav>
    );
  };
  
  export default Navbar;