import React from 'react'
import { NavLink } from 'react-router-dom'


const EVENTS = [
    {
        id: '1',
        title: 'Event 1 details'
    },
    {
        id: '2',
        title: 'Event 2 details'
    },
    {
        id: '3',
        title: 'Event 3 details'
    }
]
function EventsPage() {
    return (
        <>
            <ul>
                {EVENTS.map(item => {
                    return <li key={item.id}><NavLink to={"/events/" + item.id}>{item.title}</NavLink></li>
                })}
            </ul>
        </>
    )
}

export default EventsPage