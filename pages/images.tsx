import { FC } from "react";
import Image from "next/image";
import React from "react"
import kreski from "../public/kreski.png"




const Images:FC = () => {
    return ( 
        <main className="wrapper">       
        <div className="container">

              <p>Public image</p>
        <Image src={kreski} width={1416} height={672} alt="preview"  placeholder="blur" />  
        <p>Cloudinary image:</p>
        <Image
          src="https://res.cloudinary.com/du9w3xgvx/image/upload/v1637601210/sample.jpg"
          alt="Galaxy"
          width={864}
          height={576}          
        /> 
        
        </div>
    </main> );
}

export default Images ;
