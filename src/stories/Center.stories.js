import { Center } from "./Center";

export default {
  title: "Object/Center",
  component: Center,
  tags: ["autodocs"],
  argTypes: {
    modifier: {
      control: {
        type: "radio",
      },
      options: ["default","content"],
    },
  },
};
export const Default = {}

export const Content = {
  args: {
    modifier: "content",
  },
};
