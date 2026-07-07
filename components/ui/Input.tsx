import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { AlertCircle } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isValid?: boolean;
  icon?: React.ReactNode;
}

export function Input({
  label,
  error,
  isValid,
  required,
  disabled,
  className = '',
  id,
  icon,
  ...props
}: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  
  let stateClasses = "border-gray-200 bg-white focus:border-brand-orange focus:ring-brand-orange/20";
  if (error) {
    stateClasses = "border-red-500 focus:border-red-500 focus:ring-red-500/20";
  } else if (isValid) {
    stateClasses = "border-brand-green focus:border-brand-green focus:ring-brand-green/20";
  }

  return (
    <div className={`flex flex-col w-full ${disabled ? 'opacity-50' : ''} ${className}`}>
      <label htmlFor={inputId} className="mb-1 text-[14px] font-medium text-brand-brown">
        {label}
        {required && <span className="text-brand-orange ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          id={inputId}
          disabled={disabled}
          required={required}
          className={`input-field ${stateClasses} ${icon ? 'pr-10' : ''}`}
          {...props}
        />
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <div className="mt-1 flex items-center text-red-500 text-sm">
          <AlertCircle className="w-4 h-4 mr-1" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  isValid?: boolean;
}

export function Textarea({
  label,
  error,
  isValid,
  required,
  disabled,
  className = '',
  id,
  ...props
}: TextareaProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  
  let stateClasses = "border-gray-200 bg-white focus:border-brand-orange focus:ring-brand-orange/20";
  if (error) {
    stateClasses = "border-red-500 focus:border-red-500 focus:ring-red-500/20";
  } else if (isValid) {
    stateClasses = "border-brand-green focus:border-brand-green focus:ring-brand-green/20";
  }

  return (
    <div className={`flex flex-col w-full ${disabled ? 'opacity-50' : ''} ${className}`}>
      <label htmlFor={inputId} className="mb-1 text-[14px] font-medium text-brand-brown">
        {label}
        {required && <span className="text-brand-orange ml-1">*</span>}
      </label>
      <textarea
        id={inputId}
        disabled={disabled}
        required={required}
        className={`input-field min-h-[132px] md:min-h-[160px] resize-y ${stateClasses}`}
        {...props}
      />
      {error && (
        <div className="mt-1 flex items-center text-red-500 text-sm">
          <AlertCircle className="w-4 h-4 mr-1" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
