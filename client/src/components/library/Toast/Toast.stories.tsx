import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProvider, useToast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <div className="p-8">
          <Story />
        </div>
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Demo component to trigger toasts
const ToastDemo = () => {
  const { showToast } = useToast();

  const showSuccessToast = () => {
    showToast({
      type: 'success',
      title: 'Success!',
      description: 'Your changes have been saved successfully.',
      duration: 5000,
    });
  };

  const showErrorToast = () => {
    showToast({
      type: 'error',
      title: 'Error!',
      description: 'Something went wrong. Please try again.',
      duration: 5000,
    });
  };

  const showWarningToast = () => {
    showToast({
      type: 'warning',
      title: 'Warning!',
      description: 'This action cannot be undone.',
      duration: 5000,
    });
  };

  const showInfoToast = () => {
    showToast({
      type: 'info',
      title: 'Info',
      description: 'New updates are available.',
      duration: 5000,
    });
  };

  const showPersistentToast = () => {
    showToast({
      type: 'info',
      title: 'Persistent Toast',
      description: 'This toast will not auto-dismiss.',
      duration: 0,
    });
  };

  const showShortToast = () => {
    showToast({
      type: 'success',
      title: 'Quick Toast',
      description: 'This will disappear in 2 seconds.',
      duration: 2000,
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Toast Notifications</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={showSuccessToast}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
        >
          Show Success Toast
        </button>
        <button
          onClick={showErrorToast}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
        >
          Show Error Toast
        </button>
        <button
          onClick={showWarningToast}
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors"
        >
          Show Warning Toast
        </button>
        <button
          onClick={showInfoToast}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
          Show Info Toast
        </button>
        <button
          onClick={showPersistentToast}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition-colors"
        >
          Persistent Toast
        </button>
        <button
          onClick={showShortToast}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition-colors"
        >
          Quick Toast (2s)
        </button>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <ToastDemo />,
};

export const SuccessToast: Story = {
  render: () => {
    const { showToast } = useToast();
    
    React.useEffect(() => {
      showToast({
        type: 'success',
        title: 'Success!',
        description: 'Your changes have been saved successfully.',
      });
    }, []);

    return <div>Success toast will appear</div>;
  },
};

export const ErrorToast: Story = {
  render: () => {
    const { showToast } = useToast();
    
    React.useEffect(() => {
      showToast({
        type: 'error',
        title: 'Error!',
        description: 'Something went wrong. Please try again.',
      });
    }, []);

    return <div>Error toast will appear</div>;
  },
};

export const WarningToast: Story = {
  render: () => {
    const { showToast } = useToast();
    
    React.useEffect(() => {
      showToast({
        type: 'warning',
        title: 'Warning!',
        description: 'This action cannot be undone.',
      });
    }, []);

    return <div>Warning toast will appear</div>;
  },
};

export const InfoToast: Story = {
  render: () => {
    const { showToast } = useToast();
    
    React.useEffect(() => {
      showToast({
        type: 'info',
        title: 'Info',
        description: 'New updates are available.',
      });
    }, []);

    return <div>Info toast will appear</div>;
  },
};

export const WithoutDescription: Story = {
  render: () => {
    const { showToast } = useToast();
    
    React.useEffect(() => {
      showToast({
        type: 'success',
        title: 'Simple success message',
      });
    }, []);

    return <div>Simple toast will appear</div>;
  },
};

export const DifferentDurations: Story = {
  render: () => {
    const { showToast } = useToast();
    
    const showToasts = () => {
      showToast({
        type: 'info',
        title: '2 Second Toast',
        description: 'This will disappear in 2 seconds',
        duration: 2000,
      });
      
      setTimeout(() => {
        showToast({
          type: 'warning',
          title: '5 Second Toast',
          description: 'This will disappear in 5 seconds',
          duration: 5000,
        });
      }, 500);
      
      setTimeout(() => {
        showToast({
          type: 'error',
          title: 'Persistent Toast',
          description: 'This will not auto-dismiss',
          duration: 0,
        });
      }, 1000);
    };

    return (
      <button
        onClick={showToasts}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
      >
        Show Toasts with Different Durations
      </button>
    );
  },
};
