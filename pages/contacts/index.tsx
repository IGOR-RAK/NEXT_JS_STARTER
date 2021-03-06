import { FC } from "react";
import { GetStaticProps } from "next";
import Head from 'next/head'
import Link from "next/link";
import { contactType } from "../../types";

type contactsTypeProps = {
  contacts: [contactType],
}


export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
  
    if(!data){
      return {
        notFound:true
      }
    }     
    return {props:{contacts:data}}  
  }

const Contacts:FC<contactsTypeProps>=({contacts}) => {
    
    return (  <main>
         <Head>
            <title>Contacts</title>
        </Head>
        <div className="container">
        <div className="wrapper">
            <h1>Contacts list:</h1>
          
            <ul>
            {contacts && contacts.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>
        ))}
            </ul>
        </div>
        </div>
    </main>);
}

export default Contacts;