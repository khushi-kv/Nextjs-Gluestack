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
import { Image } from "@gluestack-ui/themed";
import Staffpicks from "../staffpicks/staffpicks";

export default function Blogs({ publishedData }: { publishedData: any[] }) {
  function blogdata() {
    return Blog;
  }
  const data = blogdata();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      width={"100%"}
    >
      <Box
        padding={"$20"}
        width={"56%"}
        paddingLeft={"$20"}
        // sx={{
        //   "@base": {
        //     // bg: "$red500",
        //     padding: "$2",
        //   },
        //   "@md": {
        //     // bg: "$green500",
        //     padding: "$4",
        //   },
        //   "@lg": {
        //     // bg: "$blue500",
        //     padding: "$20",
        //     // paddingLeft: "$40",
        //   },
        // }}

        // width={"$6/12"}
      >
        <Box display="flex" flexWrap="wrap">
          {data.map((post) => (
            <div key={post.id}>
              <Box
                display="flex"
                flexDirection="row"
                gap={"$3"}
                paddingTop={"$6"}
              >
                <AvatarImage
                  source={{
                    uri: "https:images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
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
                  sx={{
                    "@base": {
                      fontSize: "$md",
                    },
                    "@md": {
                      fontSize: "$xl",
                    },
                    "@lg": {
                      fontSize: "$xl",
                    },
                  }}
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
                    uri: "https://whatfix.com/blog/wp-content/uploads/2021/09/digital-innovation.jpg",
                  }}
                  marginLeft={"$4"}
                  alt="blog-image"
                />
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                gap={"$32"}
                sx={{
                  "@base": {
                    gap: "$4",
                  },
                  "@md": {
                    // bg: "$green500",
                    gap: "$32",
                  },
                  "@lg": {
                    // bg: "$blue500",
                    gap: "$32",
                  },
                }}
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

          <Box display="flex" p={"$2"} flexWrap="wrap" >
            {publishedData.map((data, index) => (
              <div key={index}>
                <Link href={`/blog/${data.id}`}>
                  <Heading
                    fontSize={"$xl"}
                    position="relative"
                    top={"$2"}
                    sx={{
                      "@base": {
                        fontSize: "$md",
                      },
                      "@md": {
                        fontSize: "$xl",
                      },
                      "@lg": {
                        fontSize: "$xl",
                      },
                    }}
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
                />
              </Box>
                

                <Box
                  borderBottomColor="$secondary200"
                  borderBottomWidth="$1"
                  paddingTop={"$10"}
                />
              </div>
            ))}
          </Box>
        </Box>
      </Box>

      <Box pl={"$4"} borderLeftColor="$secondary200" borderLeftWidth="$1">
        <Staffpicks />
      </Box>
    </Box>
  );
}
