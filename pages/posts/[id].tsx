import { FC } from "react";
import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import Head from "next/head";
import PostInfo from "../../components/Postinfo";
import { contactType,postType } from "../../types";

type postInfoProps = {
  post: postType ,
  user: contactType,
}


export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await response.json();
  
    const paths = data.map(({ id }) => ({
      params: { id: id.toString() }
    }));
  
    return {
      paths,
      fallback: false,
    }
  };

  export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    const {userId} = data;
    const resAuth = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const dataAuth = await resAuth.json();
   
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { 
        post: data,
        user: dataAuth
       },
    }
  };

const Post:FC<postInfoProps> = ({ post, user }) => (
  <main className="wrapper">
      <div className="container">
    <Head>
      <title>{post.title}</title>
    </Head>
        <PostInfo post={post} user={user}/>
    </div>
   
  </main>
);

export default Post;