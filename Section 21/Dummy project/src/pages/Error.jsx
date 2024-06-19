import React from 'react'
import MainNavigation from '../components/MainNavigation'

function ErrorPage() {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An error occurred</h1>
                <p>Could not fint this page!</p>
            </main>
        </>
    )
}

export default ErrorPage