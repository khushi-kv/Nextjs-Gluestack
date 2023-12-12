import React from "react";
import Blog from "../../../data/blogposts.json";
import { Avatar, AvatarImage, Box, Heading, Text } from "@gluestack-ui/themed";
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
    <main>
      <Box p={"$20"} pl={"$96"}>
        <Box pt={"$8"}>
          <Heading fontSize={"$5xl"} width={"70%"} lineHeight={"52px"}>
            {currentBlog.title}
          </Heading>
          <Box pt={"$8"} display="flex" flexDirection="row">
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
              size="lg"
              width={40}
              height={40}
            />
            <Text ml={"$12"}>{currentBlog.author} .</Text>
            <Text ml={"$3"} color="#1A8917">
              Follow
            </Text>
          </Box>

          <Text fontSize={"$sm"} ml={"$12"}>
            10 min read . 4 days ago{" "}
          </Text>
          <Box
           position="relative"
           top={"$4"}
            borderRadius="$xs"
            borderTopColor="$secondary200"
            borderWidth="$1"
          />

          <Box
            position="relative"
            top={"$10"}
            borderRadius="$xs"
            borderBottomColor="$secondary200"
            borderWidth="$1"
          />

          <Text
            pt={"$10"}
            pl={"$2"}
            fontSize={"$xl"}
            lineHeight={40}
            fontFamily="source-serif-pro, Georgia, Cambria"
            width="66%"
            fontWeight="100"
          >
            {currentBlog.content}
          </Text>
        </Box>
      </Box>
    </main>
  );
}
