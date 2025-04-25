'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const AccordionContext = createContext(undefined);
export const AccordionProvider = ({ children, value }) => {
    return (_jsx(AccordionContext.Provider, { value: value, children: children }));
};
export const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (context === undefined) {
        throw new Error('useAccordion must be used within an AccordionProvider');
    }
    return context;
};
