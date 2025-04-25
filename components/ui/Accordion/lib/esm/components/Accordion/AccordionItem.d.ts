import React, { ReactNode } from 'react';
interface AccordionItemProps {
    children: ReactNode;
    id: string;
    disabled?: boolean;
    className?: string;
}
export declare const AccordionItem: React.FC<AccordionItemProps>;
export {};
