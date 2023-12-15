import {
  AvatarImage,
  Box,
  Button,
  Center,
  Heading,
  Text,
} from "@gluestack-ui/themed";
import React from "react";

interface ProfileProps {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
}

export const Profile: React.FC<ProfileProps> = ({ data }) => {
  return (
    <Center>
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
          {data.map((profile: any) => (
            <>
              <Text
                fontSize={"$md"}
                fontWeight="700"
                position="relative"
                left={"$11"}
                top={"$3"}
              >
                {profile.title}
              </Text>

              <Box display="flex" flexDirection="row">
                <AvatarImage
                  source={{
                    uri: profile.image,
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
                  {profile.description}
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
    </Center>
  );
};
