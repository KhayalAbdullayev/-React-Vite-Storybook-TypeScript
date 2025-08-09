import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface ToastData {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
  position?: ToastPosition;
  closable?: boolean;
}

interface ToastProps extends ToastData {
  onClose: (id: string) => void;
}

interface ToastContextType {
  showToast: (toast: Omit<ToastData, 'id'>) => void;
  hideToast: (id: string) => void;
  toasts: ToastData[];
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  description,
  duration = 5000,
  closable = true,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'error':
        return <AlertCircle className="text-red-500" size={20} />;
      case 'warning':
        return <AlertTriangle className="text-orange-500" size={20} />;
      case 'info':
        return <Info className="text-blue-500" size={20} />;
    }
  };

  const getColorClasses = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-orange-50 border-orange-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
    }
  };

  const getTitleColorClass = () => {
    switch (type) {
      case 'success':
        return 'text-green-800';
      case 'error':
        return 'text-red-800';
      case 'warning':
        return 'text-orange-800';
      case 'info':
        return 'text-blue-800';
    }
  };

  const getDescriptionColorClass = () => {
    switch (type) {
      case 'success':
        return 'text-green-700';
      case 'error':
        return 'text-red-700';
      case 'warning':
        return 'text-orange-700';
      case 'info':
        return 'text-blue-700';
    }
  };

  const getCloseButtonColorClass = () => {
    switch (type) {
      case 'success':
        return 'text-green-400 hover:text-green-600';
      case 'error':
        return 'text-red-400 hover:text-red-600';
      case 'warning':
        return 'text-orange-400 hover:text-orange-600';
      case 'info':
        return 'text-blue-400 hover:text-blue-600';
    }
  };

  return (
    <div
      className={cn(
        'flex items-start p-4 border rounded-lg shadow-lg transition-all duration-300 max-w-sm',
        getColorClasses(),
        isVisible && !isLeaving ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0',
        isLeaving && 'transform translate-x-full opacity-0'
      )}
    >
      <div className="flex-shrink-0">
        {getIcon()}
      </div>
      <div className="ml-3 flex-1 min-w-0">
        <h4 className={cn('text-sm font-medium', getTitleColorClass())}>
          {title}
        </h4>
        {description && (
          <p className={cn('text-sm mt-1', getDescriptionColorClass())}>
            {description}
          </p>
        )}
      </div>
      {closable && (
        <button
          onClick={handleClose}
          className={cn(
            'flex-shrink-0 ml-3 transition-colors',
            getCloseButtonColorClass()
          )}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

interface ToastContainerProps {
  position: ToastPosition;
  toasts: ToastData[];
  onClose: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ position, toasts, onClose }) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'top-4 right-4';
      case 'top-left':
        return 'top-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
    }
  };

  return (
    <div className={cn('fixed z-50 space-y-2', getPositionClasses())}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  );
};

interface ToastProviderProps {
  children: ReactNode;
  defaultPosition?: ToastPosition;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ 
  children, 
  defaultPosition = 'bottom-right' 
}) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const showToast = (toastData: Omit<ToastData, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastData = {
      id,
      position: defaultPosition,
      ...toastData,
    };
    
    setToasts(prev => [...prev, newToast]);
  };

  const hideToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Group toasts by position
  const toastsByPosition = toasts.reduce((acc, toast) => {
    const position = toast.position || defaultPosition;
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(toast);
    return acc;
  }, {} as Record<ToastPosition, ToastData[]>);

  return (
    <ToastContext.Provider value={{ showToast, hideToast, toasts }}>
      {children}
      {Object.entries(toastsByPosition).map(([position, positionToasts]) => (
        <ToastContainer
          key={position}
          position={position as ToastPosition}
          toasts={positionToasts}
          onClose={hideToast}
        />
      ))}
    </ToastContext.Provider>
  );
};

export { Toast };
