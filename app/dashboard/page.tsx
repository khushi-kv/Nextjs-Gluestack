"use client";
import {
  Box,
  Input,
  Icon,
  InputField,
  Button,
  ButtonText,
  EditIcon,
  SearchIcon,
  BellIcon,
  Avatar,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import Blogs from "../components/blogs/blogs";
import { Store, useAuth } from "../context/store";
import "../../styles/dashboard.css";
import Write from "../components/write/write";
import Login from "../components/login/login";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const [publishedData, setPublishedData] = useState<any[]>([]);
  const router = useRouter();
  const {
    username,
    isLoggedIn,
    showModal,
    showModal1,
    setShowModal,
    setShowModal1,
    handleLogin,
    handleLogout,
  } = useAuth();

  const ref = React.useRef(null);
  const handlePublish = (data: {
    title: string;
    description: string;
    selectedFile: any;
  }) => {
    const newItem = {
      title: data.title,
      description: data.description,
      image: data.selectedFile,
    };
    const storedData = JSON.parse(
      localStorage.getItem("publishedData") || "[]"
    );
    localStorage.setItem(
      "publishedData",
      JSON.stringify([...storedData, newItem])
    );
  };

  useEffect(() => {
    const storedData = JSON.parse(
      localStorage.getItem("publishedData") || "[]"
    );
    setPublishedData(storedData);
  }, []);
  // const handleClearLocalStorage = () => {
  //   console.log("clear...");
  //   localStorage.removeItem("publishedData");
  //   setPublishedData([]);
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
              fontWeight={"$light"}
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
              <Button size="sm" action="primary" onPress={handleLogout}>
                <ButtonText>Logout</ButtonText>
              </Button>
            </>
          </Box>
        </Box>

        <Blogs publishedData={publishedData} />
        <Login
          showModal={showModal}
          setShowModal={setShowModal}
          onLogin={handleLogin}
        />

        <Write
          showModal1={showModal1}
          setShowModal1={setShowModal1}
          onPublish={handlePublish}
        />
      </main>
    </Store>
  );
}
