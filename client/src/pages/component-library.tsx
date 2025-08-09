import React from 'react';
import { Input } from '@/components/library/Input/Input';
import { ToastProvider, useToast } from '@/components/library/Toast/Toast';
import { SidebarMenu, useSidebarMenu, MenuItem } from '@/components/library/SidebarMenu/SidebarMenu';
import { Home, Package, ShoppingCart, Users, Settings, BarChart, Menu } from 'lucide-react';

const sampleMenuItems: MenuItem[] = [
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
    id: 'analytics',
    label: 'Analytics',
    icon: <BarChart size={16} />,
    href: '/analytics',
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

const ComponentLibraryContent = () => {
  const { showToast } = useToast();
  const { isOpen, openSidebar, closeSidebar } = useSidebarMenu();

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-semibold text-gray-900">Component Library</h1>
            <p className="text-sm text-gray-500">React + TypeScript + Storybook</p>
          </div>
          
          <nav className="p-4 space-y-2">
            <div className="mb-4">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Components</h3>
              
              <div className="space-y-1">
                <div className="w-full text-left px-3 py-2 text-sm rounded-md bg-blue-50 text-blue-600 font-medium">
                  📝 Input
                </div>
                <div className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 text-gray-700">
                  🔔 Toast
                </div>
                <div className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 text-gray-700">
                  📚 Sidebar Menu
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Component Showcase</h2>
              <p className="text-sm text-gray-500">Interactive examples of all library components</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 transition-colors">
                📄 Documentation
              </button>
              <button className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
                🚀 Storybook
              </button>
            </div>
          </header>

          <div className="flex-1 p-8 bg-white overflow-y-auto">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Input Component Showcase */}
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Input Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  <Input 
                    type="text" 
                    placeholder="Enter your text here..."
                    label="Text Input"
                  />
                  
                  <Input 
                    type="password" 
                    placeholder="Enter password..."
                    label="Password Input"
                  />
                  
                  <Input 
                    type="number" 
                    placeholder="Enter number..."
                    label="Number Input"
                  />
                  
                  <Input 
                    type="text" 
                    placeholder="Type to see clear button..."
                    clearable
                    label="Clearable Text Input"
                    defaultValue="Sample text content"
                  />
                  
                  <Input 
                    type="password" 
                    placeholder="Password with clear..."
                    clearable
                    label="Clearable Password"
                    defaultValue="secretpassword"
                  />
                  
                  <Input 
                    type="email" 
                    placeholder="Enter email..."
                    label="Email Input"
                    required
                  />
                </div>
              </section>

              {/* Toast Component Showcase */}
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Toast Notifications</h3>
                <div className="space-y-4">
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
                  </div>
                  
                  {/* Toast Examples */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-4">Toast examples (click buttons above to see them in action):</p>
                    <div className="space-y-3">
                      {/* Success Toast Example */}
                      <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        </div>
                        <div className="ml-3 flex-1">
                          <h4 className="text-sm font-medium text-green-800">Success!</h4>
                          <p className="text-sm text-green-700">Your changes have been saved successfully.</p>
                        </div>
                        <button className="flex-shrink-0 ml-3 text-green-400 hover:text-green-600">
                          ×
                        </button>
                      </div>
                      
                      {/* Error Toast Example */}
                      <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">!</span>
                          </div>
                        </div>
                        <div className="ml-3 flex-1">
                          <h4 className="text-sm font-medium text-red-800">Error!</h4>
                          <p className="text-sm text-red-700">Something went wrong. Please try again.</p>
                        </div>
                        <button className="flex-shrink-0 ml-3 text-red-400 hover:text-red-600">
                          ×
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sidebar Menu Component Showcase */}
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Sidebar Menu</h3>
                <div className="space-y-4">
                  <button
                    onClick={openSidebar}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors flex items-center"
                  >
                    <Menu className="mr-2" size={16} />
                    Open Sidebar Menu
                  </button>
                  
                  {/* Sidebar Menu Preview */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-4">Preview of sidebar menu structure:</p>
                    <div className="bg-white shadow-lg rounded-lg w-64 p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded-md cursor-pointer">
                          <span className="text-sm font-medium text-gray-900">Dashboard</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded-md cursor-pointer">
                            <span className="text-sm font-medium text-gray-900">Products</span>
                            <span className="text-xs text-gray-400">▼</span>
                          </div>
                          <div className="ml-4 space-y-1">
                            <div className="py-1 px-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md cursor-pointer">All Products</div>
                            <div className="py-1 px-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md cursor-pointer">Categories</div>
                            <div className="py-1 px-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md cursor-pointer">Inventory</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded-md cursor-pointer">
                          <span className="text-sm font-medium text-gray-900">Orders</span>
                          <span className="text-xs text-gray-400">▶</span>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded-md cursor-pointer">
                          <span className="text-sm font-medium text-gray-900">Customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Menu Component */}
      <SidebarMenu
        isOpen={isOpen}
        onClose={closeSidebar}
        items={sampleMenuItems}
        title="Navigation Menu"
      />
    </div>
  );
};

export default function ComponentLibrary() {
  return (
    <ToastProvider>
      <ComponentLibraryContent />
    </ToastProvider>
  );
}
