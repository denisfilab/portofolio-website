import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
    className?: string;
    children: ReactNode;
    href: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, href }) => (
    <Link
        type="button"
        className={`font-poppins w-fit font-medium text-primary bg-blue-gradient rounded-[0.6vw] outline-none inline-flex items-center justify-center whitespace-nowrap px-4 py-2 ${className || ''}`}
        href={href}
        target='_blank'
    >
        {children}
    </Link>
);

export default Button;
