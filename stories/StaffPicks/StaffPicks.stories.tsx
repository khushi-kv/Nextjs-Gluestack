import React from "react";
import { Meta, Story } from "@storybook/react";
import { Staffpicks } from "./StaffPicks";
import staffpicksdata from "../../data/staffpicks.json";
export default {
  component: Staffpicks,
  title: "Staffpicks",
} as Meta;

function staffsection() {
  return staffpicksdata;
}

const data = staffsection();
type StaffpicksStoryArgs = {
  data: {
    id: number;
    name: string;
    title: string;
    image: string;
  }[];
};
// Template for the data you want to display in your stories
const Template: Story = (args) => <Staffpicks data={[]} {...args} />;

// Example story with data passed as props

export const CustomStaffPicks = Template.bind({});
CustomStaffPicks.args = {
  data: [
    {
      id: 1,
      name: "John Doe",
      title: "This is the Awesome Blog Post to read ",
      image:
        "https://as2.ftcdn.net/v2/jpg/05/45/78/63/1000_F_545786380_R6yFxFYigE1jyqlWwTOMANaeitHN79Mi.jpg",
    },
  ],
};

export const LongTitles = Template.bind({});
LongTitles.args = {
  data: [
    {
      id: 1,
      name: "John Doe",
      title:
        "This is a very long and interesting title for a blog post that goes beyond the usual length",
      image:
        "https://as2.ftcdn.net/v2/jpg/05/45/78/63/1000_F_545786380_R6yFxFYigE1jyqlWwTOMANaeitHN79Mi.jpg",
    },
  ],
};

export const DifferentAvatarImages = Template.bind({});
DifferentAvatarImages.args = {
  data: [
    {
      id: 1,
      name: "John Doe",
      title: "Blog Post",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ3U4t_8ZYQaCeEMDx1PgP3PVkr2BdbpxkFA&usqp=CAU",
    },
    {
      id: 2,
      name: "Jane Doe",
      title: "Another Blog Post",
      image:
        "https://as2.ftcdn.net/v2/jpg/05/45/78/63/1000_F_545786380_R6yFxFYigE1jyqlWwTOMANaeitHN79Mi.jpg",
    },
  ],
};
