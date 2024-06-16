import React, { createContext, useContext } from 'react'

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
    const ctx = useContext(AccordionItemContext)

    if (!ctx) {
        throw new Error('Error, not outside <Accoridon.Item>')
    }
    return ctx;
}
function AccordionItem({ id, className, children }) {
    return (
        <AccordionItemContext.Provider value={id}>
            <li className={className}>
                {children}
            </li>
        </AccordionItemContext.Provider>
    )
}

export default AccordionItem