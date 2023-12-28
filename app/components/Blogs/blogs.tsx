import React from "react";
import Blog from "../../../data/blogposts.json";
import Link from "next/link";
import {
  AvatarImage,
  Box,
  Heading,
  Icon,
  Text,
  ThreeDotsIcon,
} from "@gluestack-ui/themed";
import "/styles/blogs.css";
// import styles from "./blogs.module.css";
import { Image } from "@gluestack-ui/themed";
import Staffpicks from "../staffpicks/staffpicks";
import { BlogPublish } from "@/app/dashboard/page";
import {
  BlogStyle,
  PublishDataHeading,
  PublishDataImage,
  BlogHeading,
  BlogImage,
  BlogTag,
  BorderStyle,
} from "./blogStyles";
import { useAuth } from "@/app/context/store";
export default function Blogs({
  publishedData,
  searchTerm,
  selectedTopic,
}: {
  publishedData: BlogPublish[];
  searchTerm: string;
  selectedTopic: string;
}) {
  function blogdata() {
    return Blog;
  }
  const {username}=useAuth();
  const data = blogdata();
  console.log("Selected Topic:", selectedTopic);
  const filteredBlogs = selectedTopic
    ? data.filter((blog) => blog.tag == selectedTopic)
    : data;

  console.log("Filtered Blogs:", filteredBlogs);
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      width={"100%"}
    >
      <Box padding={"$20"} width={"56%"} paddingLeft={"$20"} sx={BlogStyle}>
        <Box display="flex" flexWrap="wrap">
          <Box display="flex" p={"$2"} flexWrap="wrap">
            {publishedData.map((data, index) => (
              <div key={index}>
                <Box
                    display="flex"
                    flexDirection="row"
                    gap={"$3"}
                    paddingTop={"$6"}
                  >
                    <AvatarImage
                      source={{
                        uri: "data:image/png;base64,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",
                      }}
                      size="lg"
                      width={30}
                      height={30}
                    />

                    <Box
                      display="flex"
                      flexDirection="row"
                      gap={"$1"}
                      marginTop={"$2"}
                      marginLeft={"$10"}
                    >
                      <p className="blog-head">{username} . </p>
                      <p className="blog-head">28 Dec</p>
                    </Box>
                  </Box>
                <Link href={`/blog/${data.id}`}>
                  <Heading
                    fontSize={"$xl"}
                    position="relative"
                    top={"$2"}
                    sx={PublishDataHeading}
                  >
                    {data.title}
                  </Heading>
                </Link>

                <Box display="flex" flexDirection="row">
                  <p className="blog-content">{data.description}</p>

                  <Image
                    size="lg"
                    marginTop={"-$7"}
                    source={{
                      uri: data.image,
                    }}
                    marginLeft={"$4"}
                    alt="blog-image"
                    sx={PublishDataImage}
                  />
                  
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    gap={"$32"}
                    sx={BlogTag}
                  >
                    <Box
                      display="flex"
                      flexDirection="row"
                      marginTop={"$10"}
                      gap={"$2"}
                    >
                      <Text
                        fontSize={"$xs"}
                        backgroundColor="#F2F2F2"
                        padding={"$1"}
                        borderRadius={"$xl"}
                        color="$black"
                      >
                        Application
                      </Text>

                      <Text fontSize={"$xs"} marginTop={"$1"} color="#6B6B6B">
                        11 min read .
                      </Text>
                      <Text fontSize={"$xs"} marginTop={"$1"} color="#6B6B6B">
                        Selected for you{" "}
                      </Text>
                    </Box>
                    <Box display="flex" flexDirection="row" gap={"$4"}>
                      <Image
                        source={{
                          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEdCeu06mEtQLnDVwaUKfTN3RAOdEGEaokg&usqp=CAU",
                        }}
                        alt="saveicon"
                        width={34}
                        height={30}
                        position="relative"
                        top={"$10"}
                      />
                      <Box display="flex" flexDirection="row" gap={"$3"}>
                        <Image
                          source={{
                            uri: "https://www.svgrepo.com//show/55381/minus-sign-in-a-circular-button.svg",
                          }}
                          alt="minusIcon"
                          width={20}
                          height={20}
                          position="relative"
                          top={"$11"}
                        />

                        <Icon
                          as={ThreeDotsIcon}
                          m="$3"
                          w="$4"
                          h="$4"
                          position="relative"
                          top={"$9"}
                        />
                      </Box>
                    </Box>
                  </Box>
                <Box
                  borderBottomColor="$secondary200"
                  borderBottomWidth="$1"
                  paddingTop={"$10"}
                />
                
              </div>
              
            ))}
            
          </Box>
          {filteredBlogs.length == 0 ? (
            <Text>No Blogs Found</Text>
          ) : (
            filteredBlogs
              .filter((blog) =>
                blog.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((post) => (
                <div key={post.id}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap={"$3"}
                    paddingTop={"$6"}
                  >
                    <AvatarImage
                      source={{
                        uri: post.avatar,
                      }}
                      size="lg"
                      width={30}
                      height={30}
                    />

                    <Box
                      display="flex"
                      flexDirection="row"
                      gap={"$1"}
                      marginTop={"$2"}
                      marginLeft={"$10"}
                    >
                      <p className="blog-head">{post.author} . </p>
                      <p className="blog-head">{post.date}</p>
                    </Box>
                  </Box>

                  <Link href={`/blog/${post.id}`}>
                    <Heading
                      fontSize={"$xl"}
                      position="relative"
                      top={"$2"}
                      sx={BlogHeading}
                    >
                      {post.title}
                    </Heading>
                  </Link>
                  <Box display="flex" flexDirection="row">
                    <p className="blog-content">{post.content}</p>

                    <Image
                      size="lg"
                      marginTop={"-$7"}
                      source={{
                        uri: post.image,
                      }}
                      marginLeft={"$4"}
                      alt="blog-image"
                      sx={BlogImage}
                    />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap={"$32"}
                    sx={BlogTag}
                  >
                    <Box
                      display="flex"
                      flexDirection="row"
                      marginTop={"$10"}
                      gap={"$2"}
                    >
                      <Text
                        fontSize={"$xs"}
                        backgroundColor="#F2F2F2"
                        padding={"$1"}
                        borderRadius={"$xl"}
                        color="$black"
                      >
                        {post.tag}
                      </Text>

                      <Text fontSize={"$xs"} marginTop={"$1"} color="#6B6B6B">
                        11 min read .
                      </Text>
                      <Text fontSize={"$xs"} marginTop={"$1"} color="#6B6B6B">
                        Selected for you{" "}
                      </Text>
                    </Box>
                    <Box display="flex" flexDirection="row" gap={"$4"}>
                      <Image
                        source={{
                          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEdCeu06mEtQLnDVwaUKfTN3RAOdEGEaokg&usqp=CAU",
                        }}
                        alt="saveicon"
                        width={34}
                        height={30}
                        position="relative"
                        top={"$10"}
                      />
                      <Box display="flex" flexDirection="row" gap={"$3"}>
                        <Image
                          source={{
                            uri: "https://www.svgrepo.com//show/55381/minus-sign-in-a-circular-button.svg",
                          }}
                          alt="minusIcon"
                          width={20}
                          height={20}
                          position="relative"
                          top={"$11"}
                        />

                        <Icon
                          as={ThreeDotsIcon}
                          m="$3"
                          w="$4"
                          h="$4"
                          position="relative"
                          top={"$9"}
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    borderBottomColor="$secondary200"
                    borderBottomWidth="$1"
                    paddingTop={"$10"}
                  />
                </div>
              ))
          )}
        </Box>
      </Box>

      <Box
        pl={"$4"}
        borderLeftColor="$secondary200"
        borderLeftWidth="$1"
        sx={BorderStyle}
      >
        <Staffpicks />
      </Box>
    </Box>
  );
}
