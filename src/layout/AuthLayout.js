import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default AuthLayout
