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
      options: ["ssss", "sss", "ss", "s", "n", "m", "l", "ll", "lll"],
    },
  },
};

export const Ssss = {
  args: {
    size: "ssss",
  },
};

export const Sss = {
  args: {
    size: "sss",
  },
};

export const Ss = {
  args: {
    size: "ss",
  },
};

export const S = {
  args: {
    size: "s",
  },
};

export const N = {
  args: {
    size: "n",
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

export const LL = {
  args: {
    size: "ll",
  },
};

export const LLL = {
  args: {
    size: "lll",
  },
};
