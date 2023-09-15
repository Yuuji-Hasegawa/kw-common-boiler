import { InputText } from "./InputText";

export default {
  title: "Form（フォーム）/Input Text",
  component: InputText,
  tags: ["autodocs"],
  argTypes: {
    modifier: {
      control: {
        type: "radio",
      },
      options: ["full-wide"],
    },
  },
};

export const Default = {}

export const FullWide = {
  args: {
    modifier: "full-wide",
  },
};
