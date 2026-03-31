import React from "react";

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function LoadingButton({
  isLoading = false,
  disabled = false,
  children,
  onClick,
  className = "",
  ...props
}: LoadingButtonProps) {
  return (
    <button
      disabled={isLoading || disabled}
      onClick={onClick}
      className={`
        px-6 py-2 rounded-lg font-semibold
        bg-green-700 hover:bg-green-800 text-white
        disabled:opacity-70 disabled:cursor-not-allowed
        transition-colors duration-200
        flex items-center justify-center gap-2
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      <span>{children}</span>
    </button>
  );
}
