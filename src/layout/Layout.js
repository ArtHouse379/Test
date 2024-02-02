import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contacts</NavLink>
                    </li>
                </ul>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>
        </>
    )
}

export default Layout
