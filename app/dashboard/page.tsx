"use client";
import {
  Box,
  Button,
  ButtonText,
  Input,
  InputField,
  Avatar,
  AvatarFallbackText,
  Icon,
  SearchIcon,
  BellIcon,
} from "@gluestack-ui/themed";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import Login from "../components/login/login";
import Blogs from "../components/Blogs/blogs";
import Singleblog from "../blog/[blogId]/page";
export default function Dashboard() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const ref = React.useRef(null);
  const [username, setUsername] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = (loggedInUsername: any) => {
    setUsername(loggedInUsername);
    setIsLoggedIn(true);
  };

  return (
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
          src="/Medium.png"
          alt="Logo"
          width={50}
          height={40}
          priority={true}
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
          {/* <Image
            src={"/search.png"}
            alt="search"
            width={20}
            height={20}
            className="searchicon"
          /> */}
          <Icon as={SearchIcon} w="$5" h="$6" marginTop={"$2"} />
          <InputField placeholder="Search" />
        </Input>

        <Box
          display="flex"
          flexDirection="row"
          gap={"$6"}
          position="absolute"
          right={30}
        >
          <Box display="flex" flexDirection="row" marginTop={"$2"}>
            <Image src="/write.png" alt="Write" width={25} height={20} />
            <span
              style={{
                marginLeft: "8px",
                fontSize: "14px",
                marginTop: "2px",
                color: "gray",
              }}
            >
              Write
            </span>
          </Box>
          {/* <Image
            src={"/bell.png"}
            alt="Notification bell"
            width={38}
            height={28}
            style={{ marginTop: "3px" }}
          /> */}
          <Icon as={BellIcon} w="$6" h="$6" marginTop={"$2"} />
          {isLoggedIn ? (
            <Avatar
              bgColor="$rose600"
              size="sm"
              borderRadius="$full"
              marginBottom={"$6"}
            >
              <AvatarFallbackText>{username}</AvatarFallbackText>
            </Avatar>
          ) : (
            <Button
              size="sm"
              variant="solid"
              bg="black"
              action="secondary"
              onPress={() => setShowModal(true)}
              ref={ref}
            >
              <ButtonText>Get Started</ButtonText>
            </Button>
          )}
        </Box>
      </Box>
      <Blogs />
      <Login
        showModal={showModal}
        setShowModal={setShowModal}
        onLogin={handleLogin}
      />
    </main>
  );
}
