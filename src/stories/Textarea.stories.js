import { Textarea } from "./Textarea";

export default {
  title: "Form（フォーム）/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    modifier: {
      control: {
        type: "radio",
      },
      options: ["full-wide"],
    },
  },
};

export const Default = {}

export const FullWide = {
  args: {
    modifier: "full-wide",
  },
};
