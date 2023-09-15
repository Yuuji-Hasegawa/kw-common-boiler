import { LabelText } from "./LabelText";

export default {
  title: "Text/Label Text",
  component: LabelText,
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
