import { Frame } from "./Frame";

export default {
  title: "Object/Frame",
  component: Frame,
  tags: ["autodocs"],
  argTypes: {
    modifier: {
      control: {
        type: "radio",
      },
      options: ["round", "square", "landscape", "standard", "portrait", "upright", "skyscraper", "switch-s", "switch-m", "switch-l", "no-color"],
    },
  },
};

export const Round = {
  args: {
    modifier: "round",
  },
};

export const Square = {
  args: {
    modifier: "square",
  },
};

export const Landscape = {
  args: {
    modifier: "landscape",
  },
};

export const Standard = {
  args: {
    modifier: "standard",
  },
};

export const Portrait = {
  args: {
    modifier: "portrait",
  },
};

export const Upright = {
  args: {
    modifier: "upright",
  },
};

export const Skyscraper = {
  args: {
    modifier: "skyscraper",
  },
};

export const SwitchS = {
  args: {
    modifier:  "switch-s",
  },
};

export const SwitchM = {
  args: {
    modifier: "switch-m",
  },
};

export const SwitchL = {
  args: {
    modifier: "switch-l",
  },
};

export const NoColor = {
  args: {
    modifier: "no-color"
  },
};
