import { Stack } from "./Stack";

export default {
  title: "Example/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "radio",
      },
      options: ["3xs", "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl"],
    },
  },
};

export const XXXS = {
  args: {
    size: "3xs",
  },
};

export const XXS = {
  args: {
    size: "2xs",
  },
};

export const XS = {
  args: {
    size: "xs",
  },
};

export const S = {
  args: {
    size: "s",
  },
};

export const M = {
  args: {
    size: "m",
  },
};

export const L = {
  args: {
    size: "l",
  },
};

export const XL = {
  args: {
    size: "xl",
  },
};

export const XXL = {
  args: {
    size: "2xl",
  },
};

export const XXXL = {
  args: {
    size: "3xl",
  },
};
