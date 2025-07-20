import { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function PageWrapper({
  children,
  className = "",
}: PageWrapperProps) {
  return (
    <div
      className={`w-full px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
