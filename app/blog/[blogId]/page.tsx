import React from "react";
import Blog from "../../../data/blogposts.json";
import {
  AvatarImage,
  Box,
  Heading,
  Text,
  Image,
  Icon,
  MessageCircleIcon,
  ThreeDotsIcon,
  PlayIcon,
  ArrowUpIcon,
} from "@gluestack-ui/themed";
export default function page({
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
        <Box pt={"$8"} maxWidth={"70%"}>
          <Heading fontSize={"$5xl"} lineHeight={"52px"}>
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

          <Box>
            <Box pt={"$4"}>
              <Box
                display="flex"
                flexDirection="row"
                columnGap={"$2"}
                borderRadius="$xs"
                borderColor="#ddd"
                borderTopWidth="$1"
                borderBottomWidth={"$1"}
              >
                <Image
                  source={{
                    uri: "https://static.vecteezy.com/system/resources/previews/012/744/223/original/clapping-hand-outline-icon-free-vector.jpg",
                  }}
                  width={40}
                  height={27}
                  marginTop={"$2"}
                />
                <Text
                  fontSize={"$sm"}
                  position="relative"
                  right={"$2"}
                  top={"$3"}
                  color="$coolgrey300"
                >
                  1.2K
                </Text>
                <Icon
                  as={MessageCircleIcon}
                  m="$2"
                  w="$4"
                  h="$4"
                  marginTop={"$4"}
                />
                <Text
                  fontSize={"$sm"}
                  position="relative"
                  right={"$4"}
                  top={"$3"}
                >
                  25
                </Text>

                <Box
                  display="flex"
                  flexDirection="row"
                  position="absolute"
                  right={"$0"}
                  columnGap={"$4"}
                  top={"$2"}
                >
                  <Image
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEdCeu06mEtQLnDVwaUKfTN3RAOdEGEaokg&usqp=CAU",
                    }}
                    alt="saveicon"
                    width={34}
                    height={30}
                    position="relative"
                  />
                  <Icon
                    as={PlayIcon}
                    m="$1"
                    w="$5"
                    h="$5"
                    color="$secondary300"
                  />
                  <Icon
                    as={ArrowUpIcon}
                    m="$1"
                    w="$5"
                    h="$5"
                    color="$secondary300"
                  />
                  <Icon
                    as={ThreeDotsIcon}
                    m="$2"
                    w="$4"
                    h="$4"
                    position="relative"
                  />
                </Box>
              </Box>
            </Box>
            <Text
              pt={"$20"}
              pl={"$2"}
              fontSize={"$xl"}
              lineHeight={40}
              fontFamily="source-serif-pro, Georgia, Cambria"
              // width="66%"
              fontWeight="100"
            >
              {/* <Image
                source={{
                  uri: currentBlog.image,
                }}
                width={40}
                height={27}
                marginTop={"$2"}
              /> */}
              {currentBlog.content}
            </Text>

            <Box pt={"$4"}>
              <Box display="flex" flexDirection="row" columnGap={"$2"}>
                <Image
                  source={{
                    uri: "https://static.vecteezy.com/system/resources/previews/012/744/223/original/clapping-hand-outline-icon-free-vector.jpg",
                  }}
                  width={40}
                  height={27}
                  marginTop={"$2"}
                />
                <Text
                  fontSize={"$sm"}
                  position="relative"
                  right={"$2"}
                  top={"$3"}
                  color="$coolgrey300"
                >
                  1.2K
                </Text>
                <Icon
                  as={MessageCircleIcon}
                  m="$2"
                  w="$4"
                  h="$4"
                  marginTop={"$4"}
                />
                <Text
                  fontSize={"$sm"}
                  position="relative"
                  right={"$4"}
                  top={"$3"}
                >
                  25
                </Text>

                <Box
                  display="flex"
                  flexDirection="row"
                  position="absolute"
                  right={"$0"}
                  columnGap={"$4"}
                  top={"$2"}
                >
                  <Image
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEdCeu06mEtQLnDVwaUKfTN3RAOdEGEaokg&usqp=CAU",
                    }}
                    alt="saveicon"
                    width={34}
                    height={30}
                    position="relative"
                  />
                  <Icon
                    as={PlayIcon}
                    m="$1"
                    w="$5"
                    h="$5"
                    color="$secondary300"
                  />
                  <Icon
                    as={ArrowUpIcon}
                    m="$1"
                    w="$5"
                    h="$5"
                    color="$secondary300"
                  />
                  <Icon
                    as={ThreeDotsIcon}
                    m="$2"
                    w="$4"
                    h="$4"
                    position="relative"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
