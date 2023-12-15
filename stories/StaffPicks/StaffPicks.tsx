import { AvatarImage, Box, Center, Heading, Text } from "@gluestack-ui/themed";
import React from "react";
// import staffpicksdata from "../../data/staffpicks.json";
interface StaffpicksProps {
  data: {
    id: number;
    name: string;
    title: string;
    image: string;
  }[];
}
export const Staffpicks: React.FC<StaffpicksProps> = ({ data }) => {
  return (
    <Center>
      <Box position="relative" padding={"$1"} paddingTop={"$4"}>
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
                  uri: blog.image,
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
      </Box>
    </Center>
  );
};
