import React from "react";
import Blog from "../../../data/blogposts.json";
import { Avatar, AvatarImage,Box } from "@gluestack-ui/themed";
import Image from "next/image";
export default async function page({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  function Blogdata() {
    return Blog;
  }
  const data = Blogdata();
  const currentBlog = data.find((blog) => blog.id === blogId);

  if (!currentBlog) {
    
    return <div>Blog not found</div>;
  }
  return (
    <div>
      <Avatar size="md" borderRadius="$full">
        <AvatarImage
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
      </Avatar>
      <Box>
      <h2>{currentBlog.title}</h2>
      <p>{currentBlog.content}</p>
      <p>Date: {currentBlog.date}</p>
      </Box>
      
     
    </div>
  );
}
