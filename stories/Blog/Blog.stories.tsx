import React from "react";
import { Meta, Story } from "@storybook/react";
import Blog from "./Blog";

export default {
  component: Blog,
  title: "Blog", // The title that will appear in the Storybook navigation
} as Meta;

// Template for the data you want to display in your stories
const Template: Story = (args) => <Blog publishedData={[]} {...args} />;

export const Default = Template.bind({});
Default.args = {
  publishedData: [
    {
      id: 1,
      title: "Sample Blog 1 ",
      description: "This is the description for the sample blog 1.",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg",
        avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  ],
};
export const DifferentAvatar = Template.bind({});
DifferentAvatar.args = {
  publishedData: [
    {
      id: 2,
      title: "Sample Blog 2",
      description: "This is the description for the sample blog 2.",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03DYSkPTSn74T_vRcG9Rh56cOckNRTy5xuw&usqp=CAU",
    },
  ],
};


