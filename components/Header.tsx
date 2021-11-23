import { FC } from "react";
import Navbar from "./Navbar";
import styles from "../styles/Header.module.scss";

const Header:FC=() => {
    return (  
    <header>
        <div className='container'>
             <Navbar/> 
        </div>
            
    </header>);
}

export default Header;