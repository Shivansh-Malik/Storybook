import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal"; 

const meta: Meta = {
  title: "Components/Feedback/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Accessible modal dialog supporting focus trap and theming.",
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Open Modal
        </button>
        <Modal
          title="Interactive Modal"
          content="This modal can be opened and closed using the button."
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    );
  },
};
