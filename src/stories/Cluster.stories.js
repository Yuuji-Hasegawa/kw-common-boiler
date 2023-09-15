import { Cluster } from "./Cluster";

export default {
  title: "Object/Cluster",
  component: Cluster,
  tags: ["autodocs"],
  argTypes: {
    modifier: {
      control: {
        type: "radio",
      },
      options: ["default", "center", "middle"],
    },
  },
};

export const Default = {
  args: {
    modifier: null,
  },
};

export const Center = {
  args: {
    modifier: "center",
  },
};

export const Middle = {
  args: {
    modifier: "middle",
  },
};
