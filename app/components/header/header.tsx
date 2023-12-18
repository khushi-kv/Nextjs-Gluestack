"use client";
import React from "react";
import Login from "../login/login";
import {
  Avatar,
  Box,
  Button,
  ButtonText,
  Text,
  Image,
  Input,
  Icon,
  SearchIcon,
  InputField,
  BellIcon,
  EditIcon,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import { Store, useAuth } from "@/app/context/store";
import Write from "../write/write";

export default function Header() {
  const {
    username,
    isLoggedIn,
    showModal,
    showModal1,
    setShowModal,
    setShowModal1,
    handleLogin,
    handleLogout,
    handlePublish,
    // handleClearLocalStorage
  } = useAuth();

  const ref = React.useRef(null);

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
          h="$16"
          
        >
          <Image
            source={{
              uri: "/Medium.png",
            }}
            // src="/Medium.png"
            alt="Logo"
            width={50}
            height={40}
            // priority={true}
          />
          {isLoggedIn ? (
            <>
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
                sx={{
                  "@base": {
                    display:"none",
                  },
                  "@md": {
                 
                  display:"block"
                  },
                  "@lg": {
                   
                    display:"block"
                  },
                }}
              >
                <Icon as={SearchIcon} w="$5" h="$6" marginTop={"$2"} />
                <InputField placeholder="Search"  />
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
                  <ButtonText
                    color="$black"
                    fontWeight="$thin"
                    fontSize={"$sm"}
                  >
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
                {/* <Button
                  size="sm"
                  variant="solid"
                  bg="red"
                  onPress={handleClearLocalStorage}
                >
                  <ButtonText>ClearSS localStorage</ButtonText>
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
              <Write
                showModal1={showModal1}
                setShowModal1={setShowModal1}
                onPublish={handlePublish}
              />
            </>
          ) : (
            <>
              <Box
                display="flex"
                flexDirection="row"
                gap={"$8"}
                position="absolute"
                right={30}
              >
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
              </Box>
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
            </>
          )}
        </Box>
      </main>
    </Store>
  );
}
