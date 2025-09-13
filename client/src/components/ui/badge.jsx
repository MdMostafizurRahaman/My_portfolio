import React from "react";

export function Badge({ children, className = "", variant = "default", ...props }) {
  const base = "inline-block px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-200";
  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    outline: "border border-blue-500 text-blue-500 bg-transparent",
  };
  return (
    <span className={`${base} ${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </span>
  );
}

export default Badge;
