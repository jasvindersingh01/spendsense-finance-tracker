import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import React from 'react'

const DashboardLayout = () => {
    return (
            <div>
                <Navbar />
                <main>
                    < Outlet />
                </main>
                < Footer />
            </div>
    )
}

export default DashboardLayout
