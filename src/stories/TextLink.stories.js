import { TextLink } from "./TextLink";

export default {
  title: "Text/TextLink",
  component: TextLink,
  tags: ["autodocs"],
  argTypes: {
    modifier: {
      control: {
        type: "radio",
      },
      options: ["no-underline","full-wide"],
    },
  },
};

export const Default = {}

export const NoUnderline = {
  args: {
    modifier: "no-underline",
  },
};

export const FullWide = {
  args: {
    modifier: "full-wide",
  },
};
