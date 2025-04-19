import React from 'react';
import clsx from 'clsx';

type TextInputProps = {
  label: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  error,
  disabled = false,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-3 py-2',
    lg: 'text-lg px-4 py-3',
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-black dark:text-white">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(
          'border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2',
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-blue-500',
          disabled && 'opacity-50 cursor-not-allowed',
          sizeClasses[size]
        )}
        aria-invalid={!!error}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
