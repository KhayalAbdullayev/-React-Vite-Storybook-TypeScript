import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  type?: 'text' | 'password' | 'email' | 'number';
  clearable?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', clearable = false, size = 'medium', label, error, ...props }, ref) => {
    const [inputType, setInputType] = useState(type);
    const [value, setValue] = useState(props.defaultValue || '');
    const [isFocused, setIsFocused] = useState(false);

    const isPassword = type === 'password';
    const showValue = value !== '' && value !== undefined;
    const showClearButton = clearable && showValue && !props.disabled;
    const showPasswordToggle = isPassword && !props.disabled;

    const sizeClasses = {
      small: 'px-2 py-1 text-sm',
      medium: 'px-3 py-2',
      large: 'px-4 py-3 text-lg'
    };

    const togglePasswordVisibility = () => {
      setInputType(inputType === 'password' ? 'text' : 'password');
    };

    const clearInput = () => {
      setValue('');
      if (props.onChange) {
        const event = {
          target: { value: '' }
        } as React.ChangeEvent<HTMLInputElement>;
        props.onChange(event);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (props.onChange) {
        props.onChange(e);
      }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (props.onFocus) {
        props.onFocus(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <input
            {...props}
            ref={ref}
            type={inputType}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={cn(
              'w-full border border-gray-300 rounded-md shadow-sm transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
              'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
              sizeClasses[size],
              showClearButton || showPasswordToggle ? 'pr-10' : '',
              showClearButton && showPasswordToggle ? 'pr-16' : '',
              error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : '',
              isFocused ? 'ring-2 ring-blue-500 border-blue-500' : '',
              className
            )}
          />
          
          {(showClearButton || showPasswordToggle) && (
            <div className="absolute inset-y-0 right-0 flex items-center">
              {showClearButton && (
                <button
                  type="button"
                  onClick={clearInput}
                  className="pr-2 text-gray-400 hover:text-gray-600 transition-colors"
                  tabIndex={-1}
                >
                  <X size={16} />
                </button>
              )}
              
              {showPasswordToggle && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="pr-3 text-gray-400 hover:text-gray-600 transition-colors"
                  tabIndex={-1}
                >
                  {inputType === 'password' ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
              )}
            </div>
          )}
        </div>
        
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
