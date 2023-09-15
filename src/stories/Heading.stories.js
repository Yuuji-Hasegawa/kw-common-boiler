import { Heading } from "./Heading";

export default {
  title: "Text/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: {
        type: "radio",
      },
      options: ["c-heading", "c-sec-heading","c-ter-heading","c-qua-heading","c-qui-heading","c-sen-heading"],
    },
  },
};

export const Default = {};

export const Primary = {
  args: {
    className: "c-heading",
  },
};

export const Secondary = {
  args: {
    className: "c-sec-heading",
  },
};

export const Tertiary = {
  args: {
    className: "c-ter-heading",
  },
};

export const Quaternary = {
  args: {
    className: "c-qua-heading",
  },
};

export const Quinary = {
  args: {
    className: "c-qui-heading",
  },
};

export const Senary = {
  args: {
    className: "c-sen-heading",
  },
};
