import { SupplementText } from "./SupplementText";

export default {
  title: "Text/Supplement",
  component: SupplementText,
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
