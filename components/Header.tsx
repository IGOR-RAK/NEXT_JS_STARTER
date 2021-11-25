import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import Navbar from "./Navbar";


const Header:FC=() => {
    return (  
    <header className="header">
     
        <div className="container">                  

            <Link href="/">
                <a>
                    <Image src="/logo.png" width={60} height={60} alt="webDev" />
                </a>
            </Link>
            
            <div className="burger-btn"><span></span></div>
            <Navbar/> 

        </div>
       
        
       
            
    </header>);
}

export default Header;