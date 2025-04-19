import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './Textinput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### TextInput

A reusable, accessible input field that supports multiple sizes, states, and theming. Ideal for form data entry.
        `
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    placeholder: 'example@email.com',
    error: 'Invalid email format',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextInput label="Small" size="sm" placeholder="Small input" />
      <TextInput label="Medium" size="md" placeholder="Medium input" />
      <TextInput label="Large" size="lg" placeholder="Large input" />
    </div>
  ),
};
