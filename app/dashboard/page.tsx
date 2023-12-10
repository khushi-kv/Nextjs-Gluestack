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
  EditIcon,
  BellIcon,
} from "@gluestack-ui/themed";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import Login from "../components/login/login";
import Blogs from "../components/blogs/blogs";
import Write from "../components/write/write";
import { Store, useAuth } from "../context/store";
import "../../styles/dashboard.css";
export default function Dashboard() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModal1, setShowModal1] = useState<boolean>(false);
  const ref = React.useRef(null);
  // const [username, setUsername] = useState<string>("");
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { username, isLoggedIn, handleLogin } = useAuth();
  // const handleLogin = (loggedInUsername: any) => {
  //   setUsername(loggedInUsername);
  //   setIsLoggedIn(true);
  // };

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
            src="/Medium.png"
            alt="Logo"
            width={50}
            height={40}
            priority={true}
          />
          {isLoggedIn ? (
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
          ) : (
            " "
          )}
          <Box
            display="flex"
            flexDirection="row"
            gap={"$6"}
            position="absolute"
            right={30}
          >
           
              <div style={{
                position:"relative",left:"35px"
              }}><Icon as={EditIcon} m="$2" w="$7" h="$5" /></div>
              <Button
                position="relative"
                left={"$2"}
                padding={"$0"}
                bgColor="white"
                onPress={() => setShowModal1(true)}
                ref={ref}
              >
                <ButtonText color="$black" fontWeight="$thin">Write</ButtonText>
              </Button>
           

            <Icon as={BellIcon} w="$6" h="$6" marginTop={"$2"} />
            {isLoggedIn ? (
              <Avatar
                bgColor="$rose600"
                size="sm"
                borderRadius="$full"
                position="relative"
                top={"$1"}
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
        <Write showModal1={showModal1} setShowModal1={setShowModal1} />
      </main>
    </Store>
  );
}
