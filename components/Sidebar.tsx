import { FC } from "react";
import Link from "next/link";
import {sidebarType} from "../types"
import React from "react"

type sidebarProps = {
    items: [sidebarType],
    active:boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>; 
   
  }


const Sidebar:FC<sidebarProps> = ({items,active,setActive}) => {
    return ( 
    <div className={active ? "sidebar active" : "sidebar"} onClick={()=>{setActive(!active)}}> 
        <div className="blur"></div>
        <div className="sidebar__content" onClick={e=>e.stopPropagation()}>
            
            <ul>
                {items.map((item)=>{
                    return (
                        <li key={item.id}>
                        <Link href={item.path}>
                        <a onClick={()=>{setActive(!active)}}>{item.title}</a>
                      </Link>
                      </li>
                            )
                })}
            </ul>
        </div>
    </div> );
}

export default Sidebar ;
