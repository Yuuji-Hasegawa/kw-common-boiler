import { Stack } from "./Stack";

export default {
  title: "Object/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    modifier: {
      control: {
        type: "radio",
      },
      options: ["3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
    },
  },
};

export const XXXS = {
  args: {
    modifier: "3xs",
  },
};

export const XXS = {
  args: {
    modifier: "2xs",
  },
};

export const XS = {
  args: {
    modifier: "xs",
  },
};

export const S = {
  args: {
    modifier: "s",
  },
};

export const M = {
  args: {
    modifier: "m",
  },
};

export const L = {
  args: {
    modifier: "l",
  },
};

export const XL = {
  args: {
    modifier: "xl",
  },
};

export const XXL = {
  args: {
    modifier: "2xl",
  },
};

export const XXXL = {
  args: {
    modifier: "3xl",
  },
};

export const XXXXL = {
  args: {
    modifier: "4xl",
  },
};
