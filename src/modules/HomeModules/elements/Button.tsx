import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
    className?: string;
    children: ReactNode;
    href: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, href }) => {
    const isExternal = href.startsWith('http');

    return (
        <Link
            className={`font-poppins min-h-[44px] w-fit font-semibold text-primary bg-blue-gradient rounded-[10px] outline-none inline-flex items-center justify-center whitespace-nowrap px-4 py-2 transition-transform duration-200 ease-out active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary ${className || ''}`}
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
        >
            {children}
        </Link>
    );
};

export default Button;
