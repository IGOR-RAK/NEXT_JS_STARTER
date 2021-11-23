import { FC } from "react";
import { GetStaticProps } from "next";
import Head from 'next/head';
import Link from "next/link";
import { postType } from "../../types";

type postInfoProps = {
  posts: [postType],
 
}

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json(); 
    
     
    if(!data){
      return {
        notFound:true
      }
    }     
    return {props:{posts:data}}  
  }

const Posts:FC<postInfoProps>=({posts}) => {
    return (  <main>
        <Head>
            <title>Posts</title>
        </Head>
        <div className="wrapper">
            <h1>Post list</h1>
            <ul>
            {posts && posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
            </ul>

        </div>
        
    </main>);
}

export default Posts;