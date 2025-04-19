import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import type { TypographyProps } from "./Typography.types";

const meta: Meta<TypographyProps> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Typography component with predefined variants (h1-h6, body, caption). Uses design tokens and supports light/dark themes with Tailwind. Fully accessible with semantic tags.",
      },
    },
    accessibility: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
          },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<TypographyProps>;

export const Heading1: Story = {
  args: {
    as: "h1",
    variant: "h1",
    children: "This is an H1",
  },
};

export const Heading2: Story = {
  args: {
    as: "h2",
    variant: "h2",
    children: "This is an H2",
  },
};

export const Heading3: Story = {
  args: {
    as: "h3",
    variant: "h3",
    children: "This is an H3",
  },
};
export const Heading4: Story = {
  args: {
    as: "h4",
    variant: "h4",
    children: "This is an H4",
  },
};
export const Heading5: Story = {
  args: {
    as: "h5",
    variant: "h5",
    children: "This is an H5",
  },
};
export const Heading6: Story = {
  args: {
    as: "h6",
    variant: "h6",
    children: "This is an H6",
  },
};

export const Paragraph: Story = {
  args: {
    as: "p",
    variant: "paragraph", 
    children: "This is a paragraph of text.",
  },
};

export const LabelText: Story = {
  args: {
    as: "label",
    variant: "label",
    children: "This is label text",
  },
};

export const HelperText: Story = {
  args: {
    as: "p",
    variant: "helper",
    children: "This is helper text.",
  },
};

export const BodyText: Story = {
  args: {
    as: "p",
    variant: "body",
    children: "This is body text.",
  },
};

export const CaptionText: Story = {
  args: {
    as: "span",
    variant: "caption",
    children: "This is caption text.",
  },
};
