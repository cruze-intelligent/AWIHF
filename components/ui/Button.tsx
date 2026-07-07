import React, { ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-brand-orange focus-visible:outline-offset-2 active:scale-95 motion-reduce:transition-none";
  
  const variants = {
    primary: "bg-gradient-brand-h text-white hover:brightness-110",
    secondary: "bg-white text-brand-brown border-[1.5px] border-brand-brown hover:bg-brand-brown hover:text-white",
    ghost: "bg-transparent text-brand-orange border-[1.5px] border-brand-orange hover:bg-orange-tint",
    danger: "bg-[#C0392B] text-white hover:brightness-110",
  };

  const sizes = {
    small: "py-2 px-4 text-[14px]",
    medium: "py-2.5 px-5 md:py-3 md:px-6 text-[15px] md:text-[16px]",
    large: "py-3 px-6 md:py-4 md:px-8 text-[16px] md:text-[18px]",
  };

  const disabledStyles = "disabled:bg-gray-200 disabled:text-gray-500 disabled:border-transparent disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-none disabled:hover:brightness-100 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 disabled:active:scale-100";

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;

  return (
    <button 
      className={classes} 
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : children}
    </button>
  );
}
