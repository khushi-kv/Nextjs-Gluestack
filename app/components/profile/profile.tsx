import { AvatarImage, Box, Button, Heading, Text } from "@gluestack-ui/themed";
import React from "react";
import data from "../../../data/profile.json";
export default function Profile() {
  function ProfileData() {
    return data;
  }
  const profile = ProfileData();
  return (
    <Box paddingTop={"$8"}>
      <Heading
        fontSize={"$md"}
        position="relative"
        top={"$2"}
        fontWeight={"$500"}
      >
        Who to follow
      </Heading>

      <Box
        paddingTop={"$6"}
        display="flex"
        flexDirection="column"
        rowGap={"$1.5"}
      >
        {profile.map((data) => (
          <>
            <Text
              fontSize={"$md"}
              fontWeight="700"
              position="relative"
              left={"$11"}
              top={"$3"}
            >
              {data.title}
            </Text>

            <Box display="flex" flexDirection="row">
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
                size="md"
                width={30}
                height={30}
                position="relative"
                bottom={"$4"}
              />
              <Text
                fontSize={"$sm"}
                fontWeight="400"
                width={180}
                left={"$4"}
                position="relative"
                top={"$2"}
              >
                {data.description}
              </Text>

              <Button
                borderRadius="$full"
                size="sm"
                position="relative"
                bottom="$2"
                left="$4"
                bgColor="$white"
                borderWidth={"$1"}
                borderColor="$black"
              >
                Follow
              </Button>
            </Box>
          </>
        ))}
        <Text color="#1A8917" fontSize={"$sm"} paddingTop={"$6"}>
          See more suggestions
        </Text>
      </Box>
    </Box>
  );
}
