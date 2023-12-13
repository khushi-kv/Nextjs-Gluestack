"use client";
import React from "react";
import Blog from "../../../data/blogposts.json";
import {
  Avatar,
  AvatarImage,
  Box,
  Heading,
  Button,
  ButtonText,
  Text,
  Image,
  Input,
  Icon,
  MessageCircleIcon,
  ThreeDotsIcon,
  PlayIcon,
  ArrowUpIcon,
  SearchIcon,
  InputField,
  BellIcon,
  EditIcon,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
// import Image from "next/image";
import { Store, useAuth } from "@/app/context/store";
export default function page({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  function Blogdata() {
    return Blog;
  }
  const {
    username,
    isLoggedIn,
    showModal,
    showModal1,
    setShowModal,
    setShowModal1,
    
  } = useAuth();
  const ref = React.useRef(null);
  const data = Blogdata();
  const currentBlog = data.find((blog) => blog.id === blogId);

  if (!currentBlog) {
    return <div>Blog not found</div>;
  }
  return (
    <Store>
      <main>
        <Box
          display="flex"
          padding={"$2"}
          paddingLeft={"$6"}
          flexDirection="row"
          borderRadius="$xs"
          borderBottomColor="$secondary200"
          borderWidth="$1"
          borderTopWidth="$0"
          borderLeftWidth="$0"
          borderRightWidth="$0"
        >
          <Image
            source={{
              uri: "/Medium.png",
            }}
            alt="Logo"
            width={50}
            height={40}
          />

          <Input
            variant="rounded"
            size="md"
            maxWidth={"$1/6"}
            marginLeft={"$6"}
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            borderColor="#F9F9F9"
            bg="#F9F9F9"
          >
            <Icon as={SearchIcon} w="$5" h="$6" marginTop={"$2"} />
            <InputField placeholder="Search" />
          </Input>

          <Box
            display="flex"
            flexDirection="row"
            gap={"$8"}
            position="absolute"
            right={30}
          >
            <div
              style={{
                position: "relative",
                left: "50px",
                top: "2px",
              }}
            >
              <Icon as={EditIcon} m="$2" w="$10" h="$5" />
            </div>

            <Button
              position="relative"
              left={"$2"}
              padding={"$0"}
              bgColor="white"
              onPress={() => setShowModal1(true)}
              ref={ref}
            >
              <ButtonText color="$black" fontWeight="$thin" fontSize={"$sm"}>
                Write
              </ButtonText>
            </Button>

            <Icon
              as={BellIcon}
              w="$6"
              h="$6"
              marginTop={"$2"}
              color="$secondary300"
            />
            {/* <Button size="sm" variant="solid" bg="red" onPress={handleClearLocalStorage}>
          <ButtonText>Clear localStorage</ButtonText>
        </Button> */}

            <>
              <Avatar
                bgColor="$rose600"
                size="sm"
                borderRadius="$full"
                position="relative"
                top={"$1"}
              >
                <AvatarFallbackText>{username}</AvatarFallbackText>
              </Avatar>
            </>
          </Box>
        </Box>
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
                  // position="relative"
                  // top={"$4"}
                  // right={"-$1"}
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
                <Image
                  source={{
                    uri: currentBlog.image,
                  }}
                  width={40}
                  height={27}
                  marginTop={"$2"}
                />
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
    </Store>
  );
}
