import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Link = ({ href, children, onClick }: LinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-600 hover:text-blue-500 transition-colors duration-300 font-medium"
    >
      {children}
    </a>
  );
};