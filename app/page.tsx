"use client";
import { Box, Button, ButtonText, Center, Image } from "@gluestack-ui/themed";
// import Image from "next/image";
import { useAuth } from "./context/store";
import Login from "./components/login/login";
import React from "react";

import { url } from "inspector";

export default function Home() {
  const { showModal, setShowModal, handleLogin } = useAuth();
  const ref = React.useRef(null);

  return (
    <main>
      <Box display="flex" padding={"$2"} paddingLeft={"$6"} flexDirection="row">
        <Image
          source={{
            uri: "https://miro.medium.com/v2/resize:fit:1400/1*psYl0y9DUzZWtHzFJLIvTw.png",
          }}
          alt="Logo"
          width={50}
          height={40}
        />

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
      </Box>
      <Center>
        <Image
          width={600}
          height={150}
     
          source={{
            uri: "https://miro.medium.com/v2/resize:fit:8976/1*Ra88BZ-CSTovFS2ZSURBgg.png",
          }}
          marginLeft={"$4"}
          alt="blog-image"
        />
      </Center>
    </main>
  );
}
