import React from 'react'
import { Outlet } from 'react-router'
import MainNavigation from '../components/MainNavigation'
import classes from './Root.module.css'
function RootLayout() {
    return (
        <div>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout