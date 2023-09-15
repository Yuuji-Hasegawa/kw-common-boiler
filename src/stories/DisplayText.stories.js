import { DisplayText } from "./DisplayText";

export default {
  title: "Text/Display Text",
  component: DisplayText,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "radio",
      },
      options: ["2xl","xl","l","m","s","xs","2xs"],
    },
  },
};

export const XXL = {
  args: {
    size: "2xl",
  },
};

export const XL = {
  args: {
    size: "xl",
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

export const S = {
  args: {
    size: "s",
  },
};

export const XS = {
  args: {
    size: "xs",
  },
};

export const XXS = {
  args: {
    size: "2xs",
  },
};
