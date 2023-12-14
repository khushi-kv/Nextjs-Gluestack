import { AvatarImage, Box, Heading, Text } from "@gluestack-ui/themed";
import React from "react";
import staffpicksdata from "../../../data/staffpicks.json";
import Recommendedtopics from "../recommendedpicks/recommendedtopics";
import Profile from "../profile/profile";
export default function Staffpicks() {
  function staffsection() {
    return staffpicksdata;
  }
  const data = staffsection();
  return (
    <Box
      position="relative"
      padding={"$1"}
      paddingTop={"$4"}
      paddingLeft={"$6"}
    >
      <Heading
        fontSize={"$md"}
        position="relative"
        top={"$2"}
        fontWeight={"$500"}
      >
        Staff Picks
      </Heading>
      {data.map((blog) => (
        <>
          <Box paddingTop={"$6"}>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
              }}
              size="sm"
              width={20}
              height={20}
            />
            <Text marginLeft={"$8"} fontSize={"$sm"} fontWeight="500">
              {blog.name}
            </Text>
            <Heading
              fontSize={"$md"}
              width={"$3/4"}
              lineHeight={"$sm"}
              paddingTop={"$2"}
            >
              {blog.title}
            </Heading>
          </Box>
        </>
      ))}
      <Text color="#1A8917" fontSize={"$sm"} paddingTop={"$6"}>
        See the full list
      </Text>

      <Recommendedtopics />
      <Profile />
    </Box>
  );
}
