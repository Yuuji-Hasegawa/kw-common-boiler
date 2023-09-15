import { RectButton } from "./RectButton";

export default {
  title: "Button/Rect Button",
  component: RectButton,
  tags: ["autodocs"],
  argTypes: {
    modifier: {
      control: {
        modifier: "radio",
      },
      options: ["primary-button","danger-button","ghost-button"],
    },
  },
};
export const Default = {}

export const PrimaryButton = {
  args: {
    modifier: "primary-button",
  },
};

export const DangerButton = {
  args: {
    modifier: "danger-button",
  },
};

export const GhostButton = {
  args: {
    modifier: "ghost-button",
  },
};
