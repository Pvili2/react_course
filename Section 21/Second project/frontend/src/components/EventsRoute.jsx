import React from 'react'
import EventsNavigation from './EventsNavigation'
import { Outlet } from 'react-router-dom'

function EventsRoute() {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    )
}

export default EventsRoute