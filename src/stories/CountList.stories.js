import { CountList } from "./CountList";

export default {
  title: "List（リスト）/CountList",
  component: CountList,
  tags: ["autodocs"],
  argTypes: {
    modifier: {
      control: {
        type: "radio",
      },
      options: ["default", "secondary"],
    },
  },
};

export const Default = {};

export const Secondary = {
  args: {
    modifier: "secondary",
  },
};
