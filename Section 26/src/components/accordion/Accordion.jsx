import { React, createContext, useContext, useState } from 'react'
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);

    if (!ctx) {
        throw new Error('Accordion -related components must be wrapped by <Accordion>')
    }

    return ctx;
}
function Accordion({ children, className }) {

    const [openItemId, setOpenItemId] = useState(null);
    const contextValue = {
        openItemId,
        toggleItem
    }

    function toggleItem(id) {
        setOpenItemId(prev => prev?.openItemId === id ? null : id)
    }

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccordionContext.Provider>
    )
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default Accordion;