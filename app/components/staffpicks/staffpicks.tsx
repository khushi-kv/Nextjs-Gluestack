import { Box, Heading } from "@gluestack-ui/themed";
import React from "react";

export default function Staffpicks() {
  return (
    <Box position="relative" right={"$80"} padding={"$1"} paddingTop={"$4"}
    sx={{
     
      "@lg": {
        // bg: "$blue500",
        position:"relative",
        right:"$80",
        padding:"$1",
        paddingTop:"$4"
      },
      "@base": {
        // bg: "$red500",
       display:"$none",
      },
      "@md": {
        // bg: "$green500",
        display:"$none",
      },
    }}
    >
      <Heading
        fontSize={"$md"}
        position="relative"
        top={"$2"}
        sx={{
          "@base": {
            fontSize: "$md",
          },
          "@md": {
            fontSize: "$xl",
          },
          "@lg": {
            fontSize: "$md",
          },
        }}
      >
        Staff Picks
      </Heading>
    </Box>
  );
}
