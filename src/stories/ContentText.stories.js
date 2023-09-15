import { ContentText } from "./ContentText";

export default {
  title: "Text/Content Text",
  component: ContentText,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "radio",
      },
      options: ["l","m"],
    },
  },
};

export const L = {
  args: {
    size: "l",
  },
};

export const M = {
  args: {
    size: "m",
  },
};
