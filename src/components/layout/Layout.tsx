"use client"
import React, { useRef } from 'react'
import Navbar from '../base/Navbar';
import "./global.sass"
import Footer from '../base/Footer';
const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const ref = useRef(null)
    return (
        <div ref={ref} className='layout'>
            <Navbar target={ref} />
            <main> {children} </main>
            <Footer/>
        </div>
    )
}

export default Layout