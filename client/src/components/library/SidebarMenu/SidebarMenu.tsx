import React, { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  children?: MenuItem[];
}

export interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  title?: string;
  showOverlay?: boolean;
  closeOnOutsideClick?: boolean;
  showCloseButton?: boolean;
  className?: string;
}

interface MenuItemComponentProps {
  item: MenuItem;
  level?: number;
  onItemClick?: (item: MenuItem) => void;
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({ 
  item, 
  level = 0, 
  onItemClick 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    } else if (onItemClick) {
      onItemClick(item);
    }
  };

  const indentClass = level > 0 ? `ml-${level * 4}` : '';

  return (
    <div className="space-y-1">
      <button
        onClick={handleClick}
        className={cn(
          'w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 transition-colors',
          level > 0 && 'ml-6 text-gray-600 hover:text-gray-900'
        )}
      >
        <div className="flex items-center">
          {item.icon && (
            <span className="mr-3 text-gray-400 flex-shrink-0">
              {item.icon}
            </span>
          )}
          <span>{item.label}</span>
        </div>
        {hasChildren && (
          <span className="text-gray-400">
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
      </button>
      
      {hasChildren && isExpanded && (
        <div className="space-y-1 animate-accordion-down">
          {item.children?.map((child) => (
            <MenuItemComponent
              key={child.id}
              item={child}
              level={level + 1}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  items,
  title = 'Navigation Menu',
  showOverlay = true,
  closeOnOutsideClick = true,
  showCloseButton = true,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOutsideClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.href && !item.children) {
      // In a real app, you would navigate here
      console.log('Navigate to:', item.href);
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      {showOverlay && (
        <div
          className={cn(
            'fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300',
            isOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={handleOverlayClick}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out',
          isOpen ? 'transform translate-x-0' : 'transform translate-x-full',
          className
        )}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {showCloseButton && (
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>
        
        {/* Menu Items */}
        <nav className="p-4 h-full overflow-y-auto">
          <div className="space-y-1">
            {items.map((item) => (
              <MenuItemComponent
                key={item.id}
                item={item}
                onItemClick={handleItemClick}
              />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

// Hook for easier usage
export const useSidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return {
    isOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
};
