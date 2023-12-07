import React from "react";
import Blog from "../../../data/blogposts.json";
import Link from "next/link";
import { Avatar, AvatarImage, Box, Heading } from "@gluestack-ui/themed";
import "/styles/blogs.css";
import { Image } from "@gluestack-ui/themed";
export default function Blogs() {
  function blogdata() {
    return Blog;
  }
  const data = blogdata();
  return (
    <Box padding={"$4"}>
      {data.map((post) => (
        <div key={post.id}>
          <Box display="flex" flexDirection="row" gap={"$3"}>
            <Avatar borderColor="$white">
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                }}
                size="xs"
                borderColor="$white"
              />
            </Avatar>
            <Box display="flex" flexDirection="row" gap={"$1"} marginTop={"$3"}>
              <p className="blog-head">{post.author}</p>
              <p className="blog-head">{post.date}</p>
            </Box>
          </Box>

          <Link href={`/blog/${post.id}`}>
            <Heading fontSize={"$2xl"}>{post.title}</Heading>
          </Link>
          <Box display="flex" flexDirection="row">
            <p className="blog-content">{post.content}</p>
            <Image
              size="lg"
              marginTop={"-$6"}
              source={{
                uri: "https://whatfix.com/blog/wp-content/uploads/2021/09/digital-innovation.jpg",
              }}
            />
          </Box>
          
        </div>
      ))}
      <Box
        borderRadius="$xs"
        borderBottomColor="$secondary200"
        borderWidth="$1"
        borderTopWidth="$0"
        borderLeftWidth="$0"
        borderRightWidth="$0"
      />
    </Box>
  );
}
