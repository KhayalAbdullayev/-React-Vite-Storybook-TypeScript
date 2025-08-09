import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    clearable: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
    type: 'text',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password...',
    type: 'password',
    label: 'Password',
  },
};

export const PasswordWithToggle: Story = {
  args: {
    placeholder: 'Enter password...',
    type: 'password',
    label: 'Password with Toggle',
    defaultValue: 'secretpassword',
  },
};

export const Clearable: Story = {
  args: {
    placeholder: 'Type to see clear button...',
    type: 'text',
    clearable: true,
    label: 'Clearable Input',
    defaultValue: 'Sample text content',
  },
};

export const ClearablePassword: Story = {
  args: {
    placeholder: 'Password with clear...',
    type: 'password',
    clearable: true,
    label: 'Clearable Password',
    defaultValue: 'secretpassword',
  },
};

export const Number: Story = {
  args: {
    placeholder: 'Enter number...',
    type: 'number',
    label: 'Number Input',
  },
};

export const Email: Story = {
  args: {
    placeholder: 'Enter email...',
    type: 'email',
    label: 'Email Input',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter your text...',
    type: 'text',
    label: 'Input with Error',
    error: 'This field is required',
    defaultValue: '',
  },
};

export const Required: Story = {
  args: {
    placeholder: 'This field is required...',
    type: 'text',
    label: 'Required Input',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input...',
    type: 'text',
    label: 'Disabled Input',
    disabled: true,
    defaultValue: 'Cannot edit this',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input size="small" placeholder="Small input..." label="Small" />
      <Input size="medium" placeholder="Medium input..." label="Medium" />
      <Input size="large" placeholder="Large input..." label="Large" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input type="text" placeholder="Text input..." label="Text" />
      <Input type="password" placeholder="Password..." label="Password" defaultValue="password123" />
      <Input type="text" clearable placeholder="Clearable..." label="Clearable" defaultValue="Clear me" />
      <Input type="password" clearable placeholder="Clearable password..." label="Clearable Password" defaultValue="secret" />
      <Input type="number" placeholder="Number..." label="Number" />
      <Input type="email" placeholder="Email..." label="Email" />
    </div>
  ),
};
