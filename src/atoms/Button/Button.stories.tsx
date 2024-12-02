import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { StarIcon, CheckIcon } from "@radix-ui/react-icons";

const meta: Meta<ButtonProps> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "danger"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    isLoading: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Loading: Story = {
  args: {
    variant: "primary",
    size: "medium",
    isLoading: true,
    children: "Button",
  },
};

export const LoadingWithIcons: Story = {
  args: {
    variant: "secondary",
    size: "large",
    isLoading: true,
    icons: { before: CheckIcon, after: StarIcon },
    children: "Button with Icons",
  },
};

export const Default: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
    icons: { before: StarIcon },
  },
};
