import React from "react";
import Blog from "../../data/blogposts.json";
import Link from "next/link";
import {
  AvatarImage,
  Box,
  Heading,
  Icon,
  Text,
  ThreeDotsIcon,
} from "@gluestack-ui/themed";
import "/styles/blogs.css";
import { Image } from "@gluestack-ui/themed";
// import Staffpicks from "@/app/components/staffpicks/staffpicks";
import { BlogPublish } from "@/app/dashboard/page";
export default function Blogs({
  publishedData,
}: {
  publishedData: BlogPublish[];
}) {
  function blogdata() {
    return Blog;
  }
  const data = blogdata();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      width={"100%"}
    >
      <Box padding={"$20"} width={"56%"} paddingLeft={"$20"}>
        <Box display="flex" flexWrap="wrap">
          <Box display="flex" p={"$2"} flexWrap="wrap">
            {publishedData.map((data, index) => (
              <div key={index}>
                <AvatarImage
                  source={{
                    uri: data.avatar,
                  }}
                  width={30}
                  height={30}
                  marginTop={"$2"}
                />
                <Link href={`/blog/${data.id}`}>
                  <Heading
                    fontSize={"$xl"}
                    position="relative"
                    top={"$2"}
                    left={"$10"}
                    sx={{
                      "@base": {
                        fontSize: "$md",
                      },
                      "@md": {
                        fontSize: "$xl",
                      },
                      "@lg": {
                        fontSize: "$xl",
                      },
                    }}
                  >
                    {data.title}
                  </Heading>
                </Link>

                <Box display="flex" flexDirection="row">
                  <p className="blog-content">{data.description}</p>

                  <Image
                    size="lg"
                    marginTop={"-$7"}
                    source={{
                      uri: data.image,
                    }}
                    marginLeft={"$4"}
                    alt="blog-image"
                  />
                </Box>

                <Box
                  borderBottomColor="$secondary200"
                  borderBottomWidth="$1"
                  paddingTop={"$10"}
                />
              </div>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
