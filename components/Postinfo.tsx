
import { FC } from "react";
import { postType,contactType } from "../types";

type postInfoProps = {
  post: postType ,
  user: contactType,
}




const PostInfo:FC<postInfoProps> = ({ post,user }) => {
  const { title, body } = post || {};
  const { name } = user || {};

  if (!post) {
    return <h1>Empty post</h1>
  }

//   const capital = [...title][0].toUpperCase();
//   const splicedTitle = [...title].splice(1).join("")  
//   const result = capital+splicedTitle;
 
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{user.name}</p>
    </>
  );
}

export default PostInfo;