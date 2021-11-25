import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
// import { useState } from 'react';


const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'SSG', path: '/posts' },
     { id: 3, title: 'SSR', path: '/contacts' },
    //  { id: 4, title: 'Images', path: '/images' },
  ];

const Navbar = () => {
    const { pathname } = useRouter();
    
    // const [menu,setMenu] = useState(false)

  
    return (
      <nav className={styles.nav}>
         <div className={styles.links}>
            {navigation.map(({ id, title, path }) => (
              <Link key={id} href={path}>
                <a className={pathname === path ? styles.active : null}>{title}</a>
              </Link>
            ))}        
        </div>
      </nav>
    );
  };
  
  export default Navbar;