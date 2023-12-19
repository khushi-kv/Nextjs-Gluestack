import React from "react";
import { Meta, Story } from "@storybook/react";
import { Profile } from "./Profile";
import data from "../../data/profile.json";
type ProfileArgs = {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
};
function ProfileData() {
  return data;
}
const profile = ProfileData();
export default {
  component: Profile,
  title: "Profile",
} as Meta;

// Template for the data you want to display in your stories
const Template: Story = (args) => <Profile data={[]} {...args} />;

// Example story with data passed as props

export const CustomProfile = Template.bind({});
CustomProfile.args = {
  data: [
    {
      id: 1,
      title: "This is the profile title",
      description: "This is the profile description",
      image:
        "https://i.pinimg.com/564x/15/18/30/15183032c3e5a078f7f091b4a880bf1c.jpg",
    },
  ],
};
