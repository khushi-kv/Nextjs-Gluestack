import { Center, Image } from "@gluestack-ui/themed";
import React from "react";
export default function Home() {
  return (
    <main>
      <Center pt={"$72"}>
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
