import React from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  children,
  className,
  disabled = false,
}) => {
  const defaultClassName = "button-primary-medium";
  return (
    <button
      className={`button ${className || defaultClassName}`}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
