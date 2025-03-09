import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`z-0 inline-block h-full w-full bg-light py-32 px-56 dark:bg-dark xl:p-24 lg:p-16 
      md:px-12 md:px-8 sm:py-8 sm:px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
