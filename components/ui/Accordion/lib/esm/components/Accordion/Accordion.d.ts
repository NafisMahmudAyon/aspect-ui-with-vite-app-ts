import React, { ReactNode } from 'react';
interface AccordionProps {
    children: ReactNode;
    iconEnabled?: boolean;
    iconPosition?: 'left' | 'right';
    iconClassName?: string;
    activeIconClassName?: string;
    activeItem?: string[];
    activeIcon?: ReactNode;
    inactiveIcon?: ReactNode;
    multiple?: boolean;
    className?: string;
    labelClassName?: string;
    activeLabelClassName?: string;
    headerClassName?: string;
    activeHeaderClassName?: string;
    contentClassName?: string;
    reset?: boolean;
}
export declare const Accordion: React.FC<AccordionProps>;
export {};
