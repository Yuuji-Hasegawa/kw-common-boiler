import { Icon } from "./Icon";

export default {
  title: "Object/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    modifier: {
      control: {
        type: "radio",
      },
      options: ["default", "center"],
    },
  },
};

export const Default = {}

export const Center = {
  args: {
    modifier: "center",
  },
};
