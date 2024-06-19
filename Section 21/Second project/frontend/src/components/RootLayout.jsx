import React from 'react'
import { Outlet } from 'react-router'
import MainNavigation from './MainNavigation'

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout