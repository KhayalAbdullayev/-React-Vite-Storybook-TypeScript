import type { Meta, StoryObj } from '@storybook/react';
import { SidebarMenu, useSidebarMenu, MenuItem } from './SidebarMenu';
import { Home, Package, ShoppingCart, Users, Settings, BarChart } from 'lucide-react';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    showOverlay: {
      control: 'boolean',
    },
    closeOnOutsideClick: {
      control: 'boolean',
    },
    showCloseButton: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <Home size={16} />,
    href: '/dashboard',
  },
  {
    id: 'orders',
    label: 'Orders',
    icon: <ShoppingCart size={16} />,
    href: '/orders',
  },
  {
    id: 'customers',
    label: 'Customers',
    icon: <Users size={16} />,
    href: '/customers',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <BarChart size={16} />,
    href: '/analytics',
  },
];

const nestedItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <Home size={16} />,
    href: '/dashboard',
  },
  {
    id: 'products',
    label: 'Products',
    icon: <Package size={16} />,
    children: [
      {
        id: 'all-products',
        label: 'All Products',
        href: '/products',
      },
      {
        id: 'categories',
        label: 'Categories',
        href: '/products/categories',
      },
      {
        id: 'inventory',
        label: 'Inventory',
        href: '/products/inventory',
      },
    ],
  },
  {
    id: 'orders',
    label: 'Orders',
    icon: <ShoppingCart size={16} />,
    children: [
      {
        id: 'all-orders',
        label: 'All Orders',
        href: '/orders',
      },
      {
        id: 'pending',
        label: 'Pending',
        href: '/orders/pending',
      },
      {
        id: 'completed',
        label: 'Completed',
        href: '/orders/completed',
      },
    ],
  },
  {
    id: 'customers',
    label: 'Customers',
    icon: <Users size={16} />,
    href: '/customers',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings size={16} />,
    children: [
      {
        id: 'profile',
        label: 'Profile',
        href: '/settings/profile',
      },
      {
        id: 'security',
        label: 'Security',
        href: '/settings/security',
      },
      {
        id: 'notifications',
        label: 'Notifications',
        href: '/settings/notifications',
      },
    ],
  },
];

const deepNestedItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <Home size={16} />,
    href: '/dashboard',
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    icon: <Package size={16} />,
    children: [
      {
        id: 'products',
        label: 'Products',
        children: [
          {
            id: 'all-products',
            label: 'All Products',
            href: '/ecommerce/products',
          },
          {
            id: 'add-product',
            label: 'Add Product',
            href: '/ecommerce/products/add',
          },
          {
            id: 'product-categories',
            label: 'Categories',
            children: [
              {
                id: 'clothing',
                label: 'Clothing',
                href: '/ecommerce/products/categories/clothing',
              },
              {
                id: 'electronics',
                label: 'Electronics',
                href: '/ecommerce/products/categories/electronics',
              },
            ],
          },
        ],
      },
      {
        id: 'orders',
        label: 'Orders',
        children: [
          {
            id: 'all-orders',
            label: 'All Orders',
            href: '/ecommerce/orders',
          },
          {
            id: 'order-tracking',
            label: 'Order Tracking',
            href: '/ecommerce/orders/tracking',
          },
        ],
      },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings size={16} />,
    children: [
      {
        id: 'account',
        label: 'Account',
        children: [
          {
            id: 'profile',
            label: 'Profile',
            href: '/settings/account/profile',
          },
          {
            id: 'security',
            label: 'Security',
            href: '/settings/account/security',
          },
        ],
      },
      {
        id: 'preferences',
        label: 'Preferences',
        href: '/settings/preferences',
      },
    ],
  },
];

// Demo component
const SidebarDemo = ({ items }: { items: MenuItem[] }) => {
  const { isOpen, openSidebar, closeSidebar } = useSidebarMenu();

  return (
    <div className="p-8">
      <button
        onClick={openSidebar}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors flex items-center"
      >
        <Package className="mr-2" size={16} />
        Open Sidebar Menu
      </button>
      
      <SidebarMenu
        isOpen={isOpen}
        onClose={closeSidebar}
        items={items}
      />
    </div>
  );
};

export const Basic: Story = {
  render: () => <SidebarDemo items={basicItems} />,
};

export const WithNestedMenus: Story = {
  render: () => <SidebarDemo items={nestedItems} />,
};

export const DeepNesting: Story = {
  render: () => <SidebarDemo items={deepNestedItems} />,
};

export const NoOverlay: Story = {
  render: () => {
    const { isOpen, openSidebar, closeSidebar } = useSidebarMenu();

    return (
      <div className="p-8">
        <button
          onClick={openSidebar}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
        >
          Open Sidebar (No Overlay)
        </button>
        
        <SidebarMenu
          isOpen={isOpen}
          onClose={closeSidebar}
          items={nestedItems}
          showOverlay={false}
        />
      </div>
    );
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const { isOpen, openSidebar, closeSidebar } = useSidebarMenu();

    return (
      <div className="p-8">
        <div className="space-x-2">
          <button
            onClick={openSidebar}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
          >
            Open Sidebar
          </button>
          <button
            onClick={closeSidebar}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition-colors"
          >
            Close Sidebar
          </button>
        </div>
        
        <SidebarMenu
          isOpen={isOpen}
          onClose={closeSidebar}
          items={nestedItems}
          showCloseButton={false}
        />
      </div>
    );
  },
};

export const CustomTitle: Story = {
  render: () => {
    const { isOpen, openSidebar, closeSidebar } = useSidebarMenu();

    return (
      <div className="p-8">
        <button
          onClick={openSidebar}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
        >
          Open Custom Sidebar
        </button>
        
        <SidebarMenu
          isOpen={isOpen}
          onClose={closeSidebar}
          items={nestedItems}
          title="Admin Panel"
        />
      </div>
    );
  },
};

export const AlwaysOpen: Story = {
  render: () => (
    <div className="h-screen bg-gray-100">
      <SidebarMenu
        isOpen={true}
        onClose={() => {}}
        items={nestedItems}
        showOverlay={false}
        showCloseButton={false}
        title="Always Open Sidebar"
      />
      <div className="ml-80 p-8">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>This sidebar is always open and doesn't have overlay or close functionality.</p>
      </div>
    </div>
  ),
};
