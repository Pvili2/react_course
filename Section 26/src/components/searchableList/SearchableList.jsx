import React, { useRef, useState } from 'react'

function SearchableList({ items, itemKeyFn, children }) {

    const lastChange = useRef()
    const [searchTerm, setSearchTerm] = useState("");

    const searchResult = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));


    function handleChange(e) {

        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }
        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setSearchTerm(e.target.value)
        }, 500)
    }
    return (
        <div className='searchable-list'>
            <input onChange={handleChange} type="search" placeholder='Search...' />
            <ul>
                {searchResult.map((item) => <li key={itemKeyFn(item)}>{children(item)}</li>)}
            </ul>
        </div>
    )
}

export default SearchableList