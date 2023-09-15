import { Grid } from "./Grid";

export default {
  title: "Object/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    modifier: {
      control: {
        type: "radio",
      },
      options: ["tri", "quart"],
    },
  },
};

export const Tri = {
  args: {
    modifier: "tri",
  },
};

export const Quart = {
  args: {
    modifier: "quart",
  },
};
