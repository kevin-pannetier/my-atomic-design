import { Meta, StoryObj } from "@storybook/react";
import Icon, { IconPropsExtended } from "./Icon";
import { StarIcon } from "@radix-ui/react-icons";

const meta: Meta<IconPropsExtended> = {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;

type Story = StoryObj<IconPropsExtended>;

export const Star: Story = {
  args: {
    Icon: StarIcon,
    size: "medium",
  },
};
