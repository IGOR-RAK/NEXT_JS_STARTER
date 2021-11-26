import Link from "next/link";
import { useRouter } from "next/router";
import {sidebarType} from "../types"
import { FC } from "react";

type navbarProps = {
  items: [sidebarType] ,
 
}



const Navbar = ({items}) => {
    const { pathname } = useRouter();
    
    

  
    return (
      <nav className="nav">
         <div className="links">
            {items.map(({ id, title, path }) => (
              <Link key={id} href={path}>
                <a className={pathname === path ? "active" : null}>{title}</a>
              </Link>
            ))}        
        </div>
      </nav>
    );
  };
  
  export default Navbar;