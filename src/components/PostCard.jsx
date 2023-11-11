import React, { useEffect, useState } from "react";
import appWrite from "../appwrite/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  const [postImage,setPostImage] = useState(null); 

useEffect(()=>{
   appWrite.getFilePreview(featuredImage).then((image)=>setPostImage(image))
},[])
  return <Link to={`/post/${$id}`}>
     <div className="w-full bg-gray-100 rounded-xl pl-4">
         <div className="w-full justify-center mb-4">
            <img src={postImage} alt={title}/>
         </div>
         <h2 className="text-xl font-bold">{title}</h2>
     </div>
  </Link>;
};

export default PostCard;
