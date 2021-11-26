import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import Navbar from "./Navbar";
import { useState } from 'react';
import Sidebar from "./Sidebar";
import {sidebarType} from "../types"

// const items:sidebarType[] = [
//     { id: 1, title: 'Home', path: '/' },
//     { id: 2, title: 'SSG', path: '/posts' },
//      { id: 3, title: 'SSR', path: '/contacts' },
//     //  { id: 4, title: 'Images', path: '/images' },
//   ];
 

const Header:FC=() => {
    const [active,setActive] = useState<boolean>(false)
    const items:sidebarType[]  = [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'SSG', path: '/posts' },
         { id: 3, title: 'SSR', path: '/contacts' },
         { id: 4, title: 'Images', path: '/images' },
      ];
 
    return (  
    <header className="header">
     
        <div className="container">                  

            <Link href="/">
                <a>
                    <Image src="/logo.png" width={60} height={60} alt="webDev" />
                </a>
            </Link>
            
            <div
              className={active ? "burger-btn active" : "burger-btn"}
             onClick={()=>{setActive(!active)}}><span></span></div>
           
            <Sidebar active={active} setActive={setActive}  items={items}/>            
            <Navbar items={items} /> 

        </div>
       
        
       
            
    </header>);
}

export default Header;