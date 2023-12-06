"use client";
import {
  AlertCircleIcon,
  Box,
  Button,
  ButtonText,
  Center,
  CloseIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Icon,
  Input,
  InputField,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Avatar,
  AvatarFallbackText,

  } from "@gluestack-ui/themed";
// import { useRouter } from 'next/router';

import Image from "next/image";
import "/styles/header.css";
import { useState,useEffect } from "react";
import React from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const ref = React.useRef(null);
  const [username, setUsername] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const router = useRouter();
  const handleUsernameChange = (event: any) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    setIsUsernameValid(newUsername.length >= 3);
  };

  const isFormValid = username.trim() !== "" && isUsernameValid;
 
  const redirectToHome = () => {
    if (isFormValid) {
      setIsLoggedIn(true)
      // router.push("/home")
    }
  };
 useEffect(() => {
    if (isLoggedIn) {
      setShowModal(false); // Close the modal after login
    }
  }, [isLoggedIn]);
  return (
    <main>
      <Box
        display="flex"
        padding={"$3"}
        flexDirection="row"
        borderRadius="$xs"
        borderBottomColor="$secondary200"
        borderWidth="$1"
        borderTopWidth="$0"
        borderLeftWidth="$0"
        borderRightWidth="$0"
        justifyContent="space-between"
      >
        <Image
          src="/Medium.png"
          alt="Logo"
          width={50}
          height={40}
          priority={true}
        />
{/* 
        <Input
          variant="rounded"
          size="sm"
          maxWidth={"$1/6"}
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <Image
            src={"/search.png"}
            alt="search"
            width={20}
            height={20}
            className="searchicon"
          />
          <InputField placeholder="Search" />
        </Input> */}

        {isLoggedIn ? (
          <Avatar bgColor="$rose600" size="md" borderRadius="$full">
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
      <Center h={300}>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          finalFocusRef={ref}
        >
          <ModalBackdrop />
          <ModalContent>
            <ModalHeader>
              <Heading size="lg">Join Medium.</Heading>
              <ModalCloseButton>
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <Box h="$32">
                <FormControl
                  size="md"
                  isDisabled={false}
                  isInvalid={!isUsernameValid}
                  isReadOnly={false}
                  isRequired={true}
                >
                  <FormControlLabel mb="$1">
                    <FormControlLabelText>Username</FormControlLabelText>
                  </FormControlLabel>
                  <Input>
                    <InputField
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                      placeholder="username"
                    />
                  </Input>
                  <FormControlHelper>
                    <FormControlHelperText>
                      Must be at least 3 characters.
                    </FormControlHelperText>
                  </FormControlHelper>
                  <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                      At least 3 characters are required.
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                size="sm"
                action="secondary"
                mr="$3"
                onPress={() => setShowModal(false)}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                size="sm"
                action="positive"
                borderWidth="$0"
                isDisabled={!isFormValid}
                onPress={() => {
                  setShowModal(false);
                  redirectToHome();
                }}
              >
                <ButtonText>LogIn</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </main>
  );
}
