import React from 'react'
import { useParams } from 'react-router'

function EventDetailPage() {

    const { id } = useParams();
    return (
        <>
            <p>Event Details</p>
            <span>{id}</span>
        </>
    )
}

export default EventDetailPage